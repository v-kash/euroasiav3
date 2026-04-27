import BlogEditor from '@/components/admin/BlogEditor';

export default function NewBlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-navy mb-8">Create New Blog</h1>
      <BlogEditor />
    </div>
  );
}
