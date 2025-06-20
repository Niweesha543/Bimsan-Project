// src/app/api/register/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
  console.log(req)
  try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;

    // ADDED: Validate all required fields
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    // ADDED: Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // ADDED: Validate password strength
    if (password.length < 6) {
      return NextResponse.json({ message: 'Password must be at least 6 characters long' }, { status: 400 });
    }

    // ADDED: Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase().trim(),
      },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists with this email' }, { status: 409 });
    }

    // ADDED: Hash password before storing
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // ADDED: Create new user in database
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        createdAt: new Date(),
      },
    });

    // ADDED: Return success response (exclude password from response)
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({ 
      message: 'User registered successfully',
      user: userWithoutPassword 
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    
    // ADDED: Handle Prisma unique constraint error
    if (error.code === 'P2002') {
      return NextResponse.json({ message: 'User already exists with this email' }, { status: 409 });
    }
    console.log(error.message)
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  } finally {
    // ADDED: Close Prisma connection
    await prisma.$disconnect();
  }
}
