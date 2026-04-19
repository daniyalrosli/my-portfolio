import Link from 'next/link';
import Navbar from '../../components/navbar';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog-posts';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 sm:py-32 mt-14">
        {/* Back Link */}
        <Link
          href="/blog"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 inline-flex items-center gap-2"
        >
          ← back to blog
        </Link>

        {/* Header */}
        <article className="prose prose-invert max-w-none">
          <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>

          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <hr className="border-gray-200 dark:border-gray-800 my-8" />

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2
                    key={idx}
                    className="text-2xl font-light mt-8 mb-4 text-gray-900 dark:text-white"
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('```')) {
                const code = paragraph
                  .replace(/```(typescript|bash|javascript)?\n?/g, '')
                  .trim();
                return (
                  <pre
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-900 p-4 rounded text-sm overflow-x-auto my-4"
                  >
                    <code className="text-gray-900 dark:text-gray-100 font-mono text-sm">
                      {code}
                    </code>
                  </pre>
                );
              }
              return (
                <p key={idx} className="text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </main>
  );
}
