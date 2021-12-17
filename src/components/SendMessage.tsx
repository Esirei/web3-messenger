import { FC, MouseEvent, MutableRefObject, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { MessageEntity } from '~/types';

interface Props {
  endOfMessagesRef: MutableRefObject<HTMLDivElement>;
}

const SendMessage: FC<Props> = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState('');

  const sendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!message) return;

    new Moralis.Object<MessageEntity>('Messages', null, null)
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress') as string,
      })
      .then(() => {
        setMessage('');
      })
      .catch(error => {
        console.log(error);
      });

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form className="flex fixed bottom-10 px-6 py-4 w-11/12 max-w-2xl bg-black rounded-full border-4 border-blue-400 shadow-xl opacity-80">
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}...`}
        className="flex-grow pr-5 w-11/12 placeholder-gray-500 text-white bg-transparent outline-none"
      />
      <button onClick={sendMessage} className="font-bold text-pink-500">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
