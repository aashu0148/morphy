import React from "react";
import Head from "next/head";

import HeroSection from "Components/HeroSection/HeroSection";
import About from "Components/About/About";
import HorizontalScroller from "Components/HorizontalScroller/HorizontalScroller";
import Products from "Components/Products/Products";
import GetInTouch from "Components/GetInTouch/GetInTouch";

function AboutPage() {
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
        <About
          image="https://static.vecteezy.com/system/resources/thumbnails/009/668/503/small/hand-drawn-astronaut-in-spacesuit-fling-in-the-space-with-space-rocket-behind-cosmonaut-in-space-vector.jpg"
          texts={[
            "Welcome to spaceno10.",
            "Our clients will tell you we are the smartest people they’ve worked with. We are a team of technologists from IBM & IIT, design thinkers from IDEO & Bacardi, business leaders and founders from IIM, Harvard & INSEAD, creatives from Ogilvy & Dentsu - so they are not wrong. ",
            "But it doesn’t capture who we really are.",
          ]}
          heading="Welcome"
        />
        <About
          flip
          image="https://static.vecteezy.com/system/resources/thumbnails/009/668/503/small/hand-drawn-astronaut-in-spacesuit-fling-in-the-space-with-space-rocket-behind-cosmonaut-in-space-vector.jpg"
          texts={[
            "Spaceno10 is a mindset, rooted in 3 beliefs.",
            "Belief 1: The world is not a linear place. Most market, business and societal challenges are nonlinear in nature.",
            "Belief 2: Non linear problems require non-linear approaches.",
            "Belief 3: A deeply creative approach rooted in the principles of design thinking can unlock solutions to previously unsolvable problems. ",
          ]}
        />

        <Products />

        <GetInTouch />
        <br />
      </main>
    </>
  );
}

export default AboutPage;
