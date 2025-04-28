import Layout from '@/components/layout';
import { getBlogPosts } from './actions';
import { BlogList } from './components/BlogList';
import { BlogHero } from './components/BlogHero';
import { Suspense } from 'react';

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <Layout title={'Blog'}>
      <div className="container mx-auto px-4 py-16">
        <BlogHero />
        <Suspense
          fallback={<div className="py-12 text-center">Loading posts...</div>}
        >
          <BlogList posts={posts} />
        </Suspense>
      </div>
    </Layout>
  );
}
