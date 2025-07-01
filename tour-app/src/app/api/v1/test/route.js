// File: src/app/api/test/route.js

import { NextResponse } from 'next/server';

export async function GET() {
  console.log('🔍 Test API called: GET');
  
  return NextResponse.json({
    success: true,
    message: 'API is working perfectly!',
    timestamp: new Date().toISOString(),
    router: 'App Router (Next.js 13+)',
    endpoint: '/api/v1/test'
  });
}

export async function POST(request) {
  console.log('🔍 Test API called: POST');
  
  try {
    const body = await request.json();
    console.log('📝 POST data received:', body);
    
    return NextResponse.json({
      success: true,
      message: 'POST data received successfully!',
      data: body,
      timestamp: new Date().toISOString(),
      router: 'App Router (Next.js 13+)'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Invalid JSON data'
    }, { status: 400 });
  }
}