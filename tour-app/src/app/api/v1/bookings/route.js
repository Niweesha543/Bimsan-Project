// File: src/app/api/bookings/route.js

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  console.log('🔍 Bookings API called: POST');
  
  try {
    // Test database connection first
    console.log('Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connected');
    
    const body = await request.json();
    console.log('📝 Request body:', body);

    const {
      packageId,
      packageTitle,
      name,
      email,
      mobile,
      adults,
      children,
      startDate,
      endDate,
      message
    } = body;

    console.log('📋 Validating required fields...');

    // Validate required fields
    if (!name || !email || !mobile || !packageId || !startDate || !endDate) {
      console.log('❌ Validation failed: Missing required fields');
      return NextResponse.json({
        success: false,
        error: 'Missing required fields',
        required: ['name', 'email', 'mobile', 'packageId', 'startDate', 'endDate'],
        received: { name: !!name, email: !!email, mobile: !!mobile, packageId: !!packageId, startDate: !!startDate, endDate: !!endDate }
      }, { status: 400 });
    }

    console.log('💾 Creating booking in database...');

    // Create booking in database
    const booking = await prisma.booking.create({
      data: {
        packageId: String(packageId),
        packageTitle: packageTitle || '',
        name: String(name),
        email: String(email),
        mobile: String(mobile),
        adults: parseInt(adults) || 1,
        children: parseInt(children) || 0,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        message: message || '',
        status: 'PENDING',
      }
    });

    console.log('✅ Booking created successfully with ID:', booking.id);

    return NextResponse.json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('❌ API Error:', error);
    console.error('❌ Error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      meta: error.meta
    });
    
    // Handle specific Prisma errors with detailed messages
    if (error.code === 'P1001') {
      return NextResponse.json({
        success: false,
        error: 'Database connection failed',
        details: 'Cannot connect to database. Check your DATABASE_URL and ensure the database server is running.',
        solution: 'Verify your .env file and database connection settings'
      }, { status: 500 });
    }
    
    if (error.code === 'P2021' || error.message.includes('does not exist')) {
      return NextResponse.json({
        success: false,
        error: 'Database table not found',
        details: 'The bookings table does not exist in the database.',
        solution: 'Run: npx prisma db push'
      }, { status: 500 });
    }
    
    if (error.code === 'P2002') {
      return NextResponse.json({
        success: false,
        error: 'Duplicate booking detected',
        details: 'A booking with similar information already exists'
      }, { status: 409 });
    }
    
    if (error.name === 'PrismaClientInitializationError') {
      return NextResponse.json({
        success: false,
        error: 'Database initialization failed',
        details: error.message,
        solution: 'Check DATABASE_URL and run: npx prisma generate'
      }, { status: 500 });
    }
    
    return NextResponse.json({
      success: false,
      error: 'Failed to create booking',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      code: error.code || 'UNKNOWN_ERROR'
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  console.log('🔍 Bookings API called: GET');
  
  try {
    console.log('Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connected');
    
    console.log('📖 Fetching bookings from database...');
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10 // Limit to last 10 bookings
    });

    console.log(`✅ Found ${bookings.length} bookings`);

    return NextResponse.json({
      success: true,
      data: bookings,
      count: bookings.length
    });
  } catch (error) {
    console.error('❌ Get bookings error:', error);
    
    if (error.code === 'P1001') {
      return NextResponse.json({
        success: false,
        error: 'Database connection failed',
        solution: 'Check your database connection settings'
      }, { status: 500 });
    }
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch bookings',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}