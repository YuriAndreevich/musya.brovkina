import React, { useEffect, useState } from 'react';
import * as styles from './ParallaxGallery.module.scss';
import {sections } from './sections.js'

interface ImageProps {
  src: string;
  alt: string;
  speed: number;
}

const ParallaxGallery: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageDimensions, setImageDimensions] = useState<{ [key: string]: { width: number, height: number } }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция для получения размеров изображения
  const handleImageLoad = (src: string, event: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = event.currentTarget;
    setImageDimensions((prev) => ({
      ...prev,
      [src]: { width, height }
    }));
  };

  // Определяем ориентацию изображения на основе его размеров
  const getOrientationClass = (src: string) => {
    const dimensions = imageDimensions[src];
    if (!dimensions) return ''; // Возвращаем пустую строку, пока размер не загружен
    return dimensions.width > dimensions.height ? styles.horizontal : styles.vertical;
  };

  return (
    <div className={styles.gallery}>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.section}>
          <div
            className={styles.imageContainer}
            style={{
              transform: `translateY(${scrollY * section[0].speed}px)`, // Параллакс-движение для каждой секции
            }}
          >
            <div className={styles.marqueeWrapper}>
              {/* Дублируем изображения для создания эффекта бесконечной прокрутки */}
              <div className={styles.marquee}>
                {section.map((image, imageIndex) => (
                  <div key={imageIndex} className={`${styles.imageItem} ${getOrientationClass(image.src)}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.image}
                      onLoad={(e) => handleImageLoad(image.src, e)} // Обработчик загрузки изображения
                    />
                  </div>
                ))}
              </div>
              {/* Повторяем изображения для непрерывности */}
              <div className={styles.marquee}>
                {section.map((image, imageIndex) => (
                  <div key={`duplicate-${imageIndex}`} className={`${styles.imageItem} ${getOrientationClass(image.src)}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.image}
                      onLoad={(e) => handleImageLoad(image.src, e)} // Обработчик загрузки изображения
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxGallery;
