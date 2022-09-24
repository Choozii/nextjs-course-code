import { Fragment } from 'react';
import Head from 'next/head';

function HomePage() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
    </>
  );
}


export default HomePage;
