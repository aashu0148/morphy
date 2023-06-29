import React from "react";
import Head from "next/head";

import HeroSection from "Components/HeroSection/HeroSection";
import About from "Components/About/About";
import HorizontalScroller from "Components/HorizontalScroller/HorizontalScroller";
import Products from "Components/Products/Products";
import GetInTouch from "Components/GetInTouch/GetInTouch";

function MainPage() {
  return (
    <>
      <Head>
        <title>Morphy</title>
        <meta name="description" content="Description of the page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logox512.png"></link>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#121d32" />
        <meta name="title" content="Morphy" />
      </Head>

      <main className="main-app">
        <HeroSection />
        <About />
        <HorizontalScroller />
        <Products />
        <GetInTouch />
        <br />
      </main>
    </>
  );
}

export default MainPage;
