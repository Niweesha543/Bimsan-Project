import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function PUT(request, { params }) {
  try {
    const { searchParams } = new URL(request.url);
    const adminKey = searchParams.get('adminKey');

    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const { isApproved } = await request.json();

    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: { isApproved }
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to update testimonial' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { searchParams } = new URL(request.url);
    const adminKey = searchParams.get('adminKey');

    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    
    await prisma.testimonial.delete({
      where: { id }
    });

    return NextResponse.json(
      { message: 'Testimonial deleted successfully' }
    );
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
}