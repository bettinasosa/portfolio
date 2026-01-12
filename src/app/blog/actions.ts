import { blogPostSchema, type BlogPost } from './types';
import { z } from 'zod';

const MEDIUM_USERNAME = 'bettinasosarohl';
const TWITTER_USERNAME = 'bettysrohl';

const EXTERNAL_POSTS: BlogPost[] = [
  {
    id: 'myosin-stablecoin-builders',
    title: 'Why the Next Stablecoin Winners Start With Builders',
    content:
      "Builders who simplify real-world payments will define the next wave. Stablecoins have outgrown their roots as trading chips. In the past year they processed an estimated $46 trillion in on-chain transactions, even after filtering out bot activity the volume is roughly $9 trillion, comparable to PayPal and closing in on Visa's $16 trillion footprint.",
    url: 'https://myosin.xyz/thinking/why-the-next-stablecoin-winners-start-with-builders',
    publishedAt: '2025-11-04T00:00:00.000Z',
    heroImage: '/images/blog/stablecoin.png',
    author: {
      name: 'Bettina Sosa',
      handle: 'myosin'
    }
  }
];

async function fetchMediumPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`
    );
    const data = await response.json();

    if (!data.items) {
      return [];
    }

    return data.items.map((item: any) => {
      // Extract hero image from content
      const heroImageMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
      const heroImage = heroImageMatch ? heroImageMatch[1] : undefined;

      return {
        id: item.guid,
        title: item.title,
        content: item.description.replace(/<[^>]*>/g, ''), // Remove HTML tags
        url: item.link,
        publishedAt: item.pubDate,
        heroImage,
        author: {
          name: item.author,
          handle: MEDIUM_USERNAME
        }
      };
    });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}

export interface Tweet {
  id: string;
  text: string;
  created_at: string;
  author: {
    name: string;
    username: string;
    profile_image_url: string;
  };
}

// Convert Tweet to BlogPost format
function convertTweetToBlogPost(tweet: Tweet): BlogPost {
  const title =
    tweet.text.length > 60 ? tweet.text.substring(0, 57) + '...' : tweet.text;

  return {
    id: `tweet-${tweet.id}`,
    title: title,
    content: tweet.text,
    url: `https://twitter.com/${tweet.author.username}/status/${tweet.id}`,
    publishedAt: tweet.created_at,
    author: {
      name: tweet.author.name,
      handle: tweet.author.username,
      avatar: tweet.author.profile_image_url
    }
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const mediumPosts = await fetchMediumPosts();

  // Combine Medium posts with external posts and sort by date
  const allPosts = [...mediumPosts, ...EXTERNAL_POSTS];

  return allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
