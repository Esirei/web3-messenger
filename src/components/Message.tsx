import Moralis from 'moralis';
import { FC } from 'react';
import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';
import Avatar from '~/components/Avatar';
import { MessageEntity } from '~/types';

interface Props {
  message: Moralis.Object<MessageEntity>;
}

const Message: FC<Props> = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
  const classes = isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-blue-300';
  const usernameClasses = isUserMessage ? 'text-pink-300' : 'text-blue-400';

  return (
    <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>
      <div className={`relative w-8 h-8 ${isUserMessage && 'order-last'}`}>
        <Avatar username={message.get('username')} />
      </div>

      <div className={`flex space-x-4 p-3 rounded-lg ${classes}`}>
        <p>{message.get('message')}</p>
      </div>

      <TimeAgo
        datetime={message.createdAt}
        className={`text-[10px] italic text-gray-400 ${isUserMessage && 'order-first pr-1'}`}
      />

      <p className={`absolute -bottom-5 text-xs ${usernameClasses}`}>{message.get('username')}</p>
    </div>
  );
};

export default Message;
