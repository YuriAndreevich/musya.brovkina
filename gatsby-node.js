// const puppeteer = require('puppeteer');

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const username = 'musya.brovkina'; // Замените на реальный username

//   try {
//     // Используем Puppeteer для получения данных с Instagram
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle2' });

//     // Извлекаем данные (например, последние 4 поста)
//     const posts = await page.evaluate(() => {
//       const images = Array.from(document.querySelectorAll('article img'));
//       return images.slice(0, 4).map(img => img.src);
//     });

//     await browser.close(); // Закрываем браузер

//     console.log('Instagram Data:', posts); // Выводим данные в консоль для проверки

//     createPage({
//       path: `/instagram/${username}`,
//       component: require.resolve('./src/components/FollowAlong/index.jsx'), // Путь к шаблону
//       context: {
//         username,
//         posts, // Передаем данные постов в context
//       },
//     });

//   } catch (error) {
//     console.error('Error fetching Instagram data:', error); // Выводим ошибку в консоль
//   }
// };
