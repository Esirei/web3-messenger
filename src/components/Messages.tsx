import { FC, useRef } from 'react';
import { ByMoralis, useMoralis } from 'react-moralis';
import SendMessage from '~/components/SendMessage';

const Messages: FC = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis variant="dark" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
      </div>

      <div>
        {/*Each Message*/}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
};

export default Messages;
