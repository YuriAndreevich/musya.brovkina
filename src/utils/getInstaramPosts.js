import axios from 'axios';
import cheerio from 'cheerio';

const getInstagramPosts = async (username) => {
  const url = `https://www.instagram.com/${username}/`;

  try {
    // Получаем HTML страницы Instagram
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Ищем данные в скрипте страницы, который содержит JSON с данными
    const sharedDataScript = $('script[type="text/javascript"]').html();
    const regex = /window\._sharedData = ({.*?});/;
    const match = sharedDataScript.match(regex);
    if (match && match[1]) {
      const jsonData = JSON.parse(match[1]);

      // Извлекаем последние 4 поста
      const posts = jsonData.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.slice(0, 4);
      const postData = posts.map((post) => ({
        id: post.node.id,
        caption: post.node.edge_media_to_caption.edges[0]?.node.text || '',
        media_url: post.node.display_url,
        permalink: `https://www.instagram.com/p/${post.node.shortcode}/`,
      }));

      return postData;
    } else {
      console.error('Не удалось найти данные на странице Instagram.');
      return [];
    }
  } catch (error) {
    console.error('Ошибка при получении данных с Instagram:', error);
    return [];
  }
};

export default getInstagramPosts;
