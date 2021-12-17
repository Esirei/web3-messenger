import { FC } from 'react';
import { useMoralis } from 'react-moralis';
import Image from 'next/image';

interface Props {
  logoutOnPress?: boolean;
  username?: string;
}

const Avatar: FC<Props> = ({ logoutOnPress, username }) => {
  const { user, logout } = useMoralis();
  return (
    <div>
      <Image
        className="rounded-full bg-black cursor-pointer hover:opacity-75 duration-200"
        src={`https://avatars.dicebear.com/api/pixel-art/${username ?? user.getUsername()}.svg`}
        layout="fill"
        onClick={() => logoutOnPress && logout()}
      />
    </div>
  );
};

export default Avatar;
