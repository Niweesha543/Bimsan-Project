import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const adminKey = searchParams.get('adminKey');

    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const testimonials = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching all testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}