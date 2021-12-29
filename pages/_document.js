import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Quantum Management - Investing in the future of FoodTech, BioTech, Crypto EFT & Hyperlocal Microservices."
            key="description"
          />
          <meta
            property="og:title"
            content="LXT GROUP | QUANTUM MANAGEMENT"
            key="title"
          />
          <meta
            property="og:description"
            content="QUANTUM MANAGEMENT - Investing in the future of FoodTech, BioTech,
Crypto EFT & Hyperlocal Microservices.  Web 3.0 Blockchain domain IPFS "
            key="description"
          />
          <meta property="og:url" content="https://lxtgroup.nft" />
          <meta property="og:type" content="website" />
          <meta
            property="keywords"
            content=" Web 3.0, Blockchain, domain, IPFS, Interplantary File System, Fleek, Storj, Quantum Management, FoodTech, BioTech, Hyperlocal Microservices, Crypto, Forex, ETF, Pharmatech"
            key="keywords"
          />
          <link rel="shortcut icon" href="/ico_lxtgroup.svg" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />

          <script async src="https://cdn.announcekit.app/widget-v2.js"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js"
            type="text/javascript"
          ></script>
          <script
            src="https://api.minymon.com/minymon.js"
            defer
            type="text/javascript"
          ></script>
        </Head>
        <body className="text-stone-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          <div className="minymon">
            <minymon-body
              enableFeed="true"
              enableTalk="true"
              idsString="MWFkZmVkMjctYmM0Ny00ZjgyLWEwMGQtYjI2ODUyOWUzY2JkLmR0YVZOeWd1UG1wRHl5dHpqWFRaZA=="
              infoTitle="Hi there!"
              theme="gray"
            >
              <minymon-feedback
                description="Your message will be sent to the owner of this site."
                mid="1adfed27-bc47-4f82-a00d-b268529e3cbd"
                theme="gray"
                uid="dtaVNyguPmpDyytzjXTZd"
              ></minymon-feedback>
            </minymon-body>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
