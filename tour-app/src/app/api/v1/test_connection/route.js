// Create this file to test your API: pages/api/test-connection.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log('🔍 Testing API endpoint...');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  
  if (req.method === 'GET') {
    try {
      // Test 1: Database connection
      console.log('Testing database connection...');
      await prisma.$connect();
      console.log('✅ Database connected');
      
      // Test 2: Check if booking table exists
      console.log('Testing booking table...');
      const tableExists = await prisma.booking.findMany({
        take: 1
      });
      console.log('✅ Booking table accessible');
      
      // Test 3: Count existing bookings
      const count = await prisma.booking.count();
      console.log(`📊 Current bookings count: ${count}`);
      
      res.status(200).json({
        success: true,
        message: 'All tests passed',
        bookingCount: count,
        timestamp: new Date().toISOString()
      });
      
    } catch (error) {
      console.error('❌ Test failed:', error);
      res.status(500).json({
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    } finally {
      await prisma.$disconnect();
    }
  } 
  else if (req.method === 'POST') {
    // Test booking creation with sample data
    try {
      console.log('Testing booking creation...');
      console.log('Request body:', req.body);
      
      const testBooking = await prisma.booking.create({
        data: {
          packageId: 'test-pkg-1',
          packageTitle: 'Test Package',
          name: 'Test User',
          email: 'test@example.com',
          mobile: '+1234567890',
          adults: 2,
          children: 1,
          startDate: new Date('2024-12-25'),
          endDate: new Date('2024-12-30'),
          message: 'Test booking',
          status: 'PENDING'
        }
      });
      
      console.log('✅ Test booking created:', testBooking);
      
      res.status(201).json({
        success: true,
        message: 'Test booking created successfully',
        booking: testBooking
      });
      
    } catch (error) {
      console.error('❌ Booking creation failed:', error);
      res.status(500).json({
        success: false,
        error: error.message,
        details: error.code || 'Unknown error'
      });
    } finally {
      await prisma.$disconnect();
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}