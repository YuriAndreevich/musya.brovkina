// src/api/instagram.js

const puppeteer = require('puppeteer');

export default async function handler(req, res) {
  const { username } = req.query;  // Получаем имя пользователя Instagram из запроса

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    // Запускаем браузер Puppeteer
    const browser = await puppeteer.launch({
      headless: true,  // Запуск в безголовом режиме
      args: ['--no-sandbox', '--disable-setuid-sandbox']  // Убедитесь, что аргументы правильные для serverless
    });

    const page = await browser.newPage();
    await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle2' });

    // Извлекаем ссылки на последние 4 поста
    const posts = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('article img'));
      return images.slice(0, 4).map(img => img.src);
    });

    await browser.close();  // Закрываем браузер

    // Отправляем данные о постах в ответе
    return res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching Instagram posts' });
  }
}
