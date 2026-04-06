import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'PHYSICIST_TERMINAL_V1.0 // Chinsky Lee',
    description: 'A physics student\'s blog about quantum optics, computational physics, and tech notes.',
    site: context.site,
    items: sortedPosts.map((post) => {
      const item = {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      };

      // Add audio enclosure if available
      if (post.data.audio) {
        const audioUrl = new URL(post.data.audio.src, context.site).toString();
        // Extract file extension for type
        const ext = post.data.audio.src.split('.').pop()?.toLowerCase();
        const mimeType = ext === 'mp3' ? 'audio/mpeg' :
                        ext === 'm4a' ? 'audio/mp4' :
                        ext === 'ogg' ? 'audio/ogg' :
                        ext === 'wav' ? 'audio/wav' : 'audio/mpeg';

        item.customData = `<enclosure url="${audioUrl}" type="${mimeType}" />`;
      }

      return item;
    }),
    customData: `<language>en-us</language>`,
  });
}