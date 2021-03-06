import { FC, useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from '~/components/Message';
import SendMessage from '~/components/SendMessage';
import { MessageEntity } from '~/types';

const MINS = 15;
const Messages: FC = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, error } = useMoralisQuery<MessageEntity>(
    'Messages',
    query =>
      query
        .ascending('createdAt')
        .greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS)),
    [],
    { live: true },
  );

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis variant="dark" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
      </div>

      <div className="space-y-10 p-4">
        {data.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You&apos;re up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
};

export default Messages;
