import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";

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
            content="Unstoppable, Web 3.0, Blockchain, domain, IPFS, Interplantary File System, Fleek, Storj, Quantum Management, FoodTech, BioTech, Hyperlocal Microservices, Crypto, Forex, ETF, Pharmatech"
            key="keywords"
          />
          <meta
            property="og:image"
            content="https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/seo_logo_lxtgroup.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://lxtgroup.nft/" />
          <meta
            property="twitter:title"
            content="LXT GROUP | QUANTUM MANAGEMENT "
          />
          <meta
            property="twitter:description"
            content="Management Consulting | Investing in the future of FoodTech, BioTech,
Crypto EFT & Hyperlocal Microservices.  Web 3.0 Blockchain domain IPFS"
          />
          <meta
            property="twitter:image"
            content="https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/seo_logo_lxtgroup.png"
          />

          <link
            rel="shortcut icon"
            href="https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/ico_lxtgroup.svg"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/apple-touch-icon.png"
          />
          <link
            rel="preload"
            href="https://lxtgroup.nft/_next/static/css/6f20d1a8087a3c5b.css"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://lxtgroup.nft/_next/static/css/6f20d1a8087a3c5b.css"
            data-n-g=""
          />

          {/* Google Tag Manager - Global base code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
              `
            }}
          />
        </Head>
        <body className="text-stone-700 antialiased">
          <noscript>
            <iframe
              title="Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          <div className="minymon">
            <minymon-body
              enableFeed="true"
              enableTalk="false"
              idsString="MWFkZmVkMjctYmM0Ny00ZjgyLWEwMGQtYjI2ODUyOWUzY2JkLmR0YVZOeWd1UG1wRHl5dHpqWFRaZA=="
              infoTitle="Hi there!"
              theme="yellow"
            >
              <minymon-question
                question="What are our Fintech initiatives?"
                theme="yellow"
              >
                <minymon-answer
                  answer="LXT GROUP is launching a FOREX brokerage, along with a key partnership with a SEC regulated crypto-hedge fund."
                  question="What are our Fintech initiatives?"
                  theme="yellow"
                ></minymon-answer>
              </minymon-question>
              <minymon-question
                question="What are our BioTech initiatives?"
                theme="yellow"
              >
                <minymon-answer
                  answer="LXT Group is investing in startups & technologies in the fields of foodtech & pharmatech that are driven by advance AI or sustainable replacement solutions."
                  question="What are our BioTech initiatives?"
                  theme="yellow"
                ></minymon-answer>
              </minymon-question>
              <minymon-question
                question="What are our hyper-local microservices initiatives?"
                theme="yellow"
              >
                <minymon-answer
                  answer="LXT GROUP will be launching business startup opportunities through our hyper-local microservices platform for startups looking to scale quickly."
                  question="What are our hyper-local microservices initiatives?"
                  theme="yellow"
                ></minymon-answer>
              </minymon-question>
              <minymon-feedback
                description="Your message will be sent to the owner of this site."
                mid="1adfed27-bc47-4f82-a00d-b268529e3cbd"
                theme="yellow"
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
