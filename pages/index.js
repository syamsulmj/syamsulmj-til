import React, {useState} from 'react';
import Head from 'next/head';
import Navbar from '/components/common/navbar';
import Home from '/components/home/Home';

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Syamsul MJ</title>
        <link rel="shortcut icon" href="/icons/my-face.jpeg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Home />
    </React.Fragment>
  )
}

export default App;
