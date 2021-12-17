import Head from 'next/head';
import React from 'react';
import { useMoralis } from 'react-moralis';
import Header from '~/components/Header';
import Login from '~/components/Login';
import Messages from '~/components/Messages';

export default function Home(): React.ReactElement {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="h-screen overflow-auto bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>

      <button className="bg-yellow-500 rounded-lg p-5 py-3 font-bold" onClick={logout}>
        Log out
      </button>
    </div>
  );
}
