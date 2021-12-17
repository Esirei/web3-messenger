import { FC } from 'react';
import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import Avatar from '~/components/Avatar';
import ChangeUsername from '~/components/ChangeUsername';

const Header: FC = () => {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative w-24 h-24 mx-auto hidden lg:inline-grid">
          <Image
            className="rounded-full"
            layout="fill"
            objectFit="cover"
            src="/images/avatar.jpg"
            alt="profile"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative w-48 h-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the metaverse!</h1>

          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
