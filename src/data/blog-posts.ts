export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'A beginner-friendly guide to building modern web applications with Next.js and React.',
    content: `Next.js is a powerful React framework that makes building full-stack web applications easier than ever. In this post, we'll explore the basics and get you started.

## Why Next.js?

Next.js provides a seamless development experience with features like:
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes for backend functionality
- Built-in CSS and TypeScript support
- Automatic code splitting and optimization

## Getting Started

To create a new Next.js project:
\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

That's it! You now have a fully functional Next.js development environment.

## Key Concepts

**Pages:** Every file in the \`app\` directory becomes a route in your application.

**API Routes:** Create backend endpoints without managing separate servers.

**Middleware:** Handle authentication, logging, and more with middleware.

## What's Next?

Start exploring the Next.js documentation and build something amazing!`,
    date: '2024-04-15',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: '2',
    slug: 'learning-typescript',
    title: 'Why I Switched to TypeScript',
    excerpt: 'Exploring the benefits of TypeScript and how it improved my development workflow.',
    content: `TypeScript has become an essential tool in my development toolkit. Here's why I made the switch and why you should consider it too.

## Type Safety

TypeScript adds static typing to JavaScript, which means:
- Catch errors at compile time, not runtime
- Better IDE autocomplete and intellisense
- Self-documenting code through type annotations

## Example

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  // implementation
}
\`\`\`

## Improved Developer Experience

- Refactoring becomes safer and easier
- Less debugging time
- Better collaboration with team members
- Comprehensive error messages

## Learning Curve

Yes, there is a learning curve, but the benefits far outweigh the initial investment. Start small, use it for new projects, and gradually adopt it in existing ones.

## Conclusion

TypeScript has made me a better developer. I recommend giving it a try!`,
    date: '2024-04-10',
    tags: ['TypeScript', 'JavaScript', 'Learning']
  },
  {
    id: '3',
    slug: 'data-visualization-tips',
    title: 'Tips for Effective Data Visualization',
    excerpt: 'Learn how to present data in a way that tells a compelling story.',
    content: `Data visualization is an art and science. Here are my favorite tips for creating effective visualizations.

## Choose the Right Chart Type

Different data types benefit from different visualizations:
- **Bar charts:** Comparing categories
- **Line charts:** Showing trends over time
- **Scatter plots:** Exploring relationships
- **Pie charts:** Showing proportions (use sparingly!)

## Keep It Simple

- Remove unnecessary elements (chart junk)
- Use a clear, consistent color palette
- Label axes and provide titles
- Avoid 3D effects that don't add value

## Tell a Story

Your visualization should guide the viewer through your data:
1. Start with the headline (main insight)
2. Provide context with supporting visuals
3. End with actionable insights

## Tools I Use

- D3.js for custom visualizations
- Chart.js for quick charts
- Tableau for business dashboards
- Matplotlib for data science projects

## Final Thoughts

Remember, your goal is to help people understand your data, not to create the most elaborate chart possible. Clarity trumps complexity every time!`,
    date: '2024-04-05',
    tags: ['Data', 'Visualization', 'Design']
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
