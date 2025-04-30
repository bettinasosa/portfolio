import { blogPostSchema, type BlogPost } from './types';
import { z } from 'zod';

const MEDIUM_USERNAME = 'bettinasosarohl';
const TWITTER_USERNAME = 'bettysrohl';

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
  const posts = await fetchMediumPosts();

  // Combine and sort all posts
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
