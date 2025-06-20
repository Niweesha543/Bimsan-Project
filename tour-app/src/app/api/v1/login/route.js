// src/app/api/login/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
  console.log(req)
  try {
    const body = await req.json();
    const { email, password } = body;

    // ADDED: Validate required fields
    if (!email || !password) {
      return NextResponse.json({ message: 'Missing credentials' }, { status: 400 });
    }

    // ADDED: Find user in database
    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase().trim(),
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // ADDED: Compare password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // ADDED: Return success response (exclude password from response)
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({ 
      message: 'Login successful',
      user: userWithoutPassword 
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  } finally {
    // ADDED: Close Prisma connection
    await prisma.$disconnect();
  }
}