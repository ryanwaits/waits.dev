import 'nextra-theme-blog/style.css';
import Head from 'next/head';

import '../styles/main.css';
import "@code-hike/mdx/dist/index.css";

import '../styles/override.css';
	
import localFont from '@next/font/local';

const spaceMono = localFont({
  name: 'Space Mono',
  src: '../public/fonts/spacemono-regular.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-space-mono',
});

const sourceCodePro = localFont({
  name: 'Source Code Pro',
  src: '../public/fonts/sourcecodepro-regular.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-source-code-pro',
});

const workSans = localFont({
  name: 'Work Sans',
  src: '../public/fonts/worksans-regular.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-work-sans',
});

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
      <style>
        {`
          :root {
            ${spaceMono.variable}: 'Space Mono', monospace;
            ${sourceCodePro.variable}: 'Source Code Pro', monospace;
            ${workSans.variable}: 'Work Sans', sans-serif;
          }
        `}
      </style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
