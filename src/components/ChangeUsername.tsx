import { FC } from 'react';
import { useMoralis } from 'react-moralis';

const ChangeUsername: FC = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  function setUsername() {
    const username = prompt(`Enter your new username (current: ${user.getUsername()})`);

    if (!username) {
      return;
    }

    void setUserData({ username });
  }

  return (
    <div className="text-sm absolute top-5 right-5">
      <button disabled={isUserUpdating} onClick={setUsername} className="hover:text-pink-700">
        Change username
      </button>
    </div>
  );
};

export default ChangeUsername;
