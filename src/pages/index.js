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
        <About
          image="https://static.vecteezy.com/system/resources/thumbnails/009/668/503/small/hand-drawn-astronaut-in-spacesuit-fling-in-the-space-with-space-rocket-behind-cosmonaut-in-space-vector.jpg"
          texts={[
            "Spaceno10 is a full stack creative studio that has fun solving hard, business challenges.",
            "Our company dives deep and immerses itself in your world, understands the challenges that affect your firm, and uses multiple creative techniques to crack a solution to a problem that you previously thought was unsolvable.",
            "We are currently based out of India (Bangalore, Goa), Spain (Malaga), Singapore, and USA (San Francisco).",
          ]}
          heading="ABOUT US"
        />
        <HorizontalScroller />
        <Products />
        <About
          image="https://static.vecteezy.com/system/resources/thumbnails/009/668/503/small/hand-drawn-astronaut-in-spacesuit-fling-in-the-space-with-space-rocket-behind-cosmonaut-in-space-vector.jpg"
          texts={[
            "We love purpose-driven leaders chasing audacious, ambitious goals. A little bit of humour helps too 🙂",
            "If you’re a young founder finding Product-Market Fit, an old business looking to grow 5x in the next 3 years, or a non-profit looking to implement a large-scale program - reach out to us. In about a couple of calls, we’ll be able to tell you if we’d be the right fit for your organisation. ",
          ]}
          heading="WHO WE WORK WITH"
          changeColorWhenInFocus
        />
        <GetInTouch />
        <br />
      </main>
    </>
  );
}

export default MainPage;
