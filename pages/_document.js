import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/brand/ico_lxtgroup.svg" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          />
          <script
            id="convertful-api"
            src="https://app.convertful.com/Convertful.js?owner=6615"
            async
          ></script>
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
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          <div classname="minymon">
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
