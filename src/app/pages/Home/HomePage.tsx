import HomeFeature from "@app/features/Home/HomeFeature";
import React from "react";
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <>
      <Helmet>‍
        <title>Pets - Products</title>‍
        <meta name="description" content="Find all the best quality products your pet may need" />
        <meta property="og:url" content="pets.abc" />
        <meta property="og:site_name" content="Pets - Products" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <HomeFeature />
    </>
  )
}