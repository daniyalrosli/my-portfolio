import Link from 'next/link';
import Navbar from '../components/navbar';
import { getAllBlogPosts } from '@/data/blog-posts';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 sm:py-32 mt-14">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-light mb-4 tracking-tight">
            blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
            thoughts, learnings, and insights
          </p>
        </div>

        {/* Development Notice */}
        <div className="mb-12 p-4 border border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200 font-light">
            🚧 this section is still in development. more posts coming soon!
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block border-b border-gray-200 dark:border-gray-800 pb-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              {/* Date */}
              <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-2">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>

              {/* Title */}
              <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 font-light">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 font-light">
              no posts yet. check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
