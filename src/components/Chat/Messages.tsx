// External Dependencies
import { FunctionComponent } from 'react';

// Internal Dependencies
import { MessagesProp } from '../../types/components/Chat/Conversation/messages';
import Message from './Message';

/**
 *
 * @returns a `<ul />` element that contains the messages 📩
 */
const Messages: FunctionComponent<MessagesProp> = ({ contact }) => {
  return (
    <ul className='messages'>
      {contact?.messages?.map(message => (
        <Message key={message.id} message={message} {...contact} />
      ))}
    </ul>
  );
};

export default Messages;
