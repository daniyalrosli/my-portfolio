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
    slug: 'my-role-at-amd',
    title: 'My Role at AMD',
    excerpt: 'A look at my responsibilities and contributions on the AMD team.',
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
    tags: ['AMD', 'Career', 'Supply Chain']
  },
  {
    id: '2',
    slug: 'advanced-data-analytics-demand-supply',
    title: 'How I Integrate Advanced Data Analytics into Demand Supply Process',
    excerpt: 'How advanced data analytics can transform demand and supply planning workflows.',
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
    tags: ['Data Analytics', 'Demand Planning', 'Supply Chain']
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
