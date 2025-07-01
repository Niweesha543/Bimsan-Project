// app/api/packages/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all packages
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;
    const location = searchParams.get('location');
    const minDays = parseInt(searchParams.get('minDays'));
    const maxDays = parseInt(searchParams.get('maxDays'));

    const skip = (page - 1) * limit;

    // Build where clause for filtering
    const where = {};
    if (location) {
      where.location = { contains: location, mode: 'insensitive' };
    }
    if (minDays || maxDays) {
      where.days = {};
      if (minDays) where.days.gte = minDays;
      if (maxDays) where.days.lte = maxDays;
    }

    // Fetch packages with pagination
    const [packages, total] = await Promise.all([
      prisma.package.findMany({
        where,
        include: {
          itineraries: {
            orderBy: { order: 'asc' }
          },
          _count: {
            select: { bookings: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.package.count({ where })
    ]);

    return NextResponse.json({
      success: true,
      packages,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new package (for admin)
export async function POST(request) {
  try {
    const body = await request.json();
    
    const { 
      title, 
      description, 
      fullDescription,
      image,
      days, 
      nights, 
      rating = 0,
      reviews = 0,
      location,
      itineraries = []
    } = body;

    // Validate required fields
    if (!title || !description || !fullDescription || !image || !days || !nights || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create package with itineraries
    const packages = await prisma.package.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        fullDescription: fullDescription.trim(),
        image: image.trim(),
        days: parseInt(days),
        nights: parseInt(nights),
        rating: parseFloat(rating),
        reviews: parseInt(reviews),
        location: location.trim(),
        itineraries: {
          create: itineraries.map((item, index) => ({
            day: item.day,
            title: item.title,
            order: index + 1
          }))
        }
      },
      include: {
        itineraries: {
          orderBy: { order: 'asc' }
        }
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Package created successfully',
      packages
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating package:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}