// src/pages/index.tsx
import React from "react";
import "../index.scss";
import { PageProps } from "gatsby";
import SEO from "../components/SEO";
import Topic from "../components/Topic";
import Review from "../components/ReviewsPage";
import FollowAlong from "../components/FollowAlong";
import YandexMap from "../components/YandexMap";
import Navbar from "../components/Navbar";
import ParallaxGallery from "../components/ParallaxGallery";
import { Helmet } from "react-helmet";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO
        title="Бровист в Новополоцке — Musya Brovkina"
        description="Профессиональный бровист в Новополоцке — Musya Brovkina. Высококачественная коррекция и окрашивание бровей. Запись на процедуру."
        keywords="бровист, Новополоцк, Musya Brovkina, коррекция бровей, окрашивание бровей, процедура бровей"
        image="https://brovkina.flowly.top/static/7b12a583b4301d5f5ded395a26a2a035/86744/mainPaige.jpg"
        url="https://brovkina.flowly.top/"
      />
      <Helmet>
        <meta name="yandex-verification" content="7ea24d9a7e5769d8" />
      </Helmet>
      <main>
        <Navbar />
        <Topic />
        <Review />
        <ParallaxGallery />
        <FollowAlong />
        <YandexMap />
      </main>
    </>
  );
};

export default IndexPage;
