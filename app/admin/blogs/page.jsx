import Link from 'next/link';
import { FiPlus, FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
import DeleteBlogButton from '@/components/admin/DeleteBlogButton';

async function getBlogs() {
  try {
    const { Blog } = await import('@/lib/models');
    const blogs = await Blog.findAll({
      order: [['createdAt', 'DESC']],
    });
    return blogs.map(blog => blog.toJSON());
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function AdminBlogsPage() {
  const blogs = await getBlogs();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-primary-navy">Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="flex items-center px-4 py-2 bg-primary-navy text-white rounded-lg hover:bg-secondary-navy transition-colors"
        >
          <FiPlus className="w-5 h-5 mr-2" />
          New Blog
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-bg">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-light-bg">
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        <p className="text-sm font-medium text-text-dark truncate">{blog.title}</p>
                        <p className="text-xs text-text-muted truncate">/blog/{blog.slug}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">{blog.category || '-'}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {new Date(blog.createdAt).toLocaleDateString('en-IN')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-2 text-text-muted hover:text-primary-navy transition-colors"
                          title="View"
                        >
                          <FiEye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/blogs/${blog.id}/edit`}
                          className="p-2 text-text-muted hover:text-primary-navy transition-colors"
                          title="Edit"
                        >
                          <FiEdit2 className="w-4 h-4" />
                        </Link>
                        <DeleteBlogButton id={blog.id} title={blog.title} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-text-muted">
                    <p className="mb-4">No blogs yet</p>
                    <Link
                      href="/admin/blogs/new"
                      className="inline-flex items-center px-4 py-2 bg-primary-navy text-white rounded-lg hover:bg-secondary-navy transition-colors"
                    >
                      <FiPlus className="w-5 h-5 mr-2" />
                      Create your first blog
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
