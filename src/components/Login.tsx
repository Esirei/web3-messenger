import { FC } from 'react';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Login: FC = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login Screen</h1>
      <div className="flex flex-col w-full h-4/6 absolute z-50 items-center justify-center space-y-4">
        <Image
          className="rounded-full object-cover"
          src="/images/avatar.jpg"
          alt="Login"
          width={200}
          height={200}
        />
        <button
          onClick={() => authenticate()}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src="/images/login-background.png" layout="fill" objectFit="cover" alt="logo" />
      </div>
    </div>
  );
};

export default Login;
