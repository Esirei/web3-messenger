import Head from 'next/head';
import React from 'react';
import Login from '~/components/Login';

export default function Home(): React.ReactElement {
  const loggedIn = false;

  if (!loggedIn) {
    return <Login />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the metaverse!</h1>
    </div>
  );
}
