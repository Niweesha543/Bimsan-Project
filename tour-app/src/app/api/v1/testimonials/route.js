// FILE: src/app/api/testimonials/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/library/db';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: {
        isApproved: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 50
    });
    
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, content } = data;

    // Basic validation
    if (!name || !email || !content) {
      return NextResponse.json(
        { error: 'Name, email, and content are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create testimonial in database
    const testimonial = await prisma.testimonial.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        content: content.trim(),
        isApproved: true // Auto-approve for now
      }
    });
    
    return NextResponse.json({
      message: 'Testimonial submitted successfully',
      testimonial
    }, { status: 201 });

  } catch (error) {
    console.error('Error saving testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to save testimonial' },
      { status: 500 }
    );
  }
}