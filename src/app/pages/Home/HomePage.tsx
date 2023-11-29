import HomeFeature from "@app/features/Home/HomeFeature";
import { getActivePageMenu } from "@app/helper/menu.helper";
import React from "react";
import { Helmet } from 'react-helmet';
import { useSelector } from "react-redux";

export default function HomePage() {
  const { menus } = useSelector((state: any) => state.ui)
  const activePage = getActivePageMenu(menus)
  return (
    <>
      <Helmet
        title={activePage ? `${activePage?.display} - ${process.env.APP_NAME}` : `${process.env.APP_NAME}`}
        meta={[{name:"description", content:"Deskripsi halaman web Anda"}]}>
      </Helmet>
      <HomeFeature />
    </>
  )
}