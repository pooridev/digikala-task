// External Dependencies
import { FunctionComponent } from 'react';

// Internal Dependencies
import { Message as MessageType } from '../../types/components/Chat/Conversation/message';
import MessageTail from './MessageTail';
import unknownAvatar from '../../assets/images/avatars/react.jpg';

/**
 *
 * @returns a `<li />` element that contains the message 📩
 */
const Message: FunctionComponent<MessageType> = ({ message, ...other }) => {
  const contact =
    message.author === 'me'
      ? {
          name: 'Me',
          avatar: unknownAvatar
        }
      : other;

  return (
    <li className='message'>
      <img
        className='message__avatar'
        src={contact.avatar}
        alt={contact.name + ' said:' + message.text}
      />
      <div className='message__text-wrapper'>
        <MessageTail />
        <p className='message__text'>{message.text}</p>
      </div>
    </li>
  );
};

export default Message;