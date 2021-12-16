import Head from 'next/head';
import React from 'react';
import { useMoralis } from 'react-moralis';
import Login from '~/components/Login';

export default function Home(): React.ReactElement {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the metaverse!</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
