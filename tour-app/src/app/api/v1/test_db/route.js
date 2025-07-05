// File: src/app/api/test-db/route.js

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  console.log('🔍 Testing database connection...');
  
  try {
    // Test 1: Basic connection
    console.log('Testing Prisma connection...');
    await prisma.$connect();
    console.log('✅ Prisma connected successfully');
    
    // Test 2: Check if Booking table exists
    console.log('Testing Booking table access...');
    const tableTest = await prisma.booking.findMany({ take: 1 });
    console.log('✅ Booking table accessible');
    
    // Test 3: Count existing records
    console.log('Counting existing bookings...');
    const count = await prisma.booking.count();
    console.log(`📊 Found ${count} existing bookings`);
    
    // Test 4: Create a test record
    console.log('Creating test booking...');
    const testBooking = await prisma.booking.create({
      data: {
        packageId: 'test-pkg-001',
        packageTitle: 'Test Package',
        name: 'Test User',
        email: 'test@example.com',
        mobile: '+1234567890',
        adults: 2,
        children: 1,
        startDate: new Date('2024-12-25'),
        endDate: new Date('2024-12-30'),
        message: 'This is a test booking created by API test',
        status: 'PENDING'
      }
    });
    console.log('✅ Test booking created:', testBooking.id);
    
    return NextResponse.json({
      success: true,
      message: 'All database tests passed!',
      tests: {
        connection: 'PASS',
        tableAccess: 'PASS',
        existingRecords: count,
        testBookingCreated: testBooking.id
      },
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    
    let errorMessage = 'Database connection failed';
    let suggestions = [];
    
    if (error.code === 'P1001') {
      errorMessage = 'Cannot connect to database server';
      suggestions = [
        'Check if your database server is running',
        'Verify DATABASE_URL in .env file',
        'For SQLite: make sure the file path is correct'
      ];
    } else if (error.code === 'P2021') {
      errorMessage = 'Booking table does not exist';
      suggestions = [
        'Run: npx prisma db push',
        'Or run: npx prisma migrate dev'
      ];
    } else if (error.message.includes('does not exist')) {
      errorMessage = 'Database or table not found';
      suggestions = [
        'Run: npx prisma generate',
        'Run: npx prisma db push',
        'Check your schema.prisma file'
      ];
    }
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      details: error.message,
      code: error.code,
      suggestions,
      timestamp: new Date().toISOString()
    }, { status: 500 });
    
  } finally {
    await prisma.$disconnect();
  }
}