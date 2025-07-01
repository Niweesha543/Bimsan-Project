// app/api/packages/[id]/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch single package by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    const packages = await prisma.package.findUnique({
      where: { id },
      include: {
        itineraries: {
          orderBy: { order: 'asc' }
        },
        bookings: {
          select: {
            id: true,
            name: true,
            startDate: true,
            endDate: true,
            adults: true,
            children: true,
            status: true
          },
          orderBy: { createdAt: 'desc' }
        },
        _count: {
          select: { bookings: true }
        }
      }
    });

    if (!packages) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      packages
    });

  } catch (error) {
    console.error('Error fetching package:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update package (for admin)
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    const { 
      title, 
      description, 
      fullDescription,
      image,
      days, 
      nights, 
      rating,
      reviews,
      location,
      itineraries
    } = body;

    // Check if package exists
    const existingPackage = await prisma.package.findUnique({
      where: { id }
    });

    if (!existingPackage) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    // Update package
    const updatedPackage = await prisma.package.update({
      where: { id },
      data: {
        ...(title && { title: title.trim() }),
        ...(description && { description: description.trim() }),
        ...(fullDescription && { fullDescription: fullDescription.trim() }),
        ...(image && { image: image.trim() }),
        ...(days && { days: parseInt(days) }),
        ...(nights && { nights: parseInt(nights) }),
        ...(rating && { rating: parseFloat(rating) }),
        ...(reviews && { reviews: parseInt(reviews) }),
        ...(location && { location: location.trim() }),
        updatedAt: new Date()
      },
      include: {
        itineraries: {
          orderBy: { order: 'asc' }
        }
      }
    });

    // Update itineraries if provided
    if (itineraries && Array.isArray(itineraries)) {
      // Delete existing itineraries
      await prisma.packageItinerary.deleteMany({
        where: { packageId: id }
      });

      // Create new itineraries
      await prisma.packageItinerary.createMany({
        data: itineraries.map((item, index) => ({
          packageId: id,
          day: item.day,
          title: item.title,
          order: index + 1
        }))
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Package updated successfully',
      package: updatedPackage
    });

  } catch (error) {
    console.error('Error updating package:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete package (for admin)
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Check if package exists
    const existingPackage = await prisma.package.findUnique({
      where: { id },
      include: {
        _count: {
          select: { bookings: true }
        }
      }
    });

    if (!existingPackage) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    // Check if there are any bookings
    if (existingPackage._count.bookings > 0) {
      return NextResponse.json(
        { error: 'Cannot delete package with existing bookings' },
        { status: 400 }
      );
    }

    // Delete package (itineraries will be deleted automatically due to cascade)
    await prisma.package.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Package deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting package:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}