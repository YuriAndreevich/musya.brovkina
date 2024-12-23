import InstagramScraper from 'instagram-scraper';

const getInstagramPosts = async (username) => {
  try {
    const result = await InstagramScraper.scrapeUser(username);
    return result.items.slice(0, 4).map(post => ({
      src: post.image_versions2.candidates[0].url,
      caption: post.caption || '',
      permalink: `https://www.instagram.com/p/${post.code}/`
    }));
  } catch (error) {
    console.error('Ошибка при получении постов:', error);
  }
};
