import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import YandexMap from "../components/YandexMap";
import Topic from "../components/Topic";
import FollowAlong from '../components/FollowAlong'
import Review from '../components/ReviewsPage'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Topic />
      <Review/>
      <FollowAlong/>
      <YandexMap />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
