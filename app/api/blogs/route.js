import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const { Blog } = await import('@/lib/models');
    const blogs = await Blog.findAll({
      where: { status: 'published' },
      order: [['publishedAt', 'DESC']],
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { Blog } = await import('@/lib/models');

    // Check for duplicate slug
    const existing = await Blog.findOne({ where: { slug: data.slug } });
    if (existing) {
      return NextResponse.json({ message: 'Slug already exists' }, { status: 400 });
    }

    const blog = await Blog.create(data);
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
