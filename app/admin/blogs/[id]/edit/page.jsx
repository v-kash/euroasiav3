import { notFound } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';

async function getBlog(id) {
  try {
    const { Blog } = await import('@/lib/models');
    const blog = await Blog.findByPk(id);
    return blog ? blog.toJSON() : null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export default async function EditBlogPage({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-navy mb-8">Edit Blog</h1>
      <BlogEditor blog={blog} />
    </div>
  );
}
