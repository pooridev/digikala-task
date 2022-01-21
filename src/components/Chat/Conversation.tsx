import { FormEvent, FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';
import { ConversationProp } from '../../types/components/Chat/Conversation/conversation';
import SendMessageForm from './SendMessageForm';
import { SendMessagePayload } from '../../types/state/payloads/send-message';
import { getUID } from '../../utils/getUID';
import { sendMessage } from '../../state/contacts/Contactsslice';

/**
 *
 * @returns a section that allows the user to send a message 📩
 */
const Conversation: FunctionComponent<ConversationProp> = ({ contact }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const changeMessageInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim().length === 0) return;

    const SEND_MESSAGE_PAYLOAD: SendMessagePayload = {
      author: 'me',
      text: message.trim(),
      timestamp: Date.now(),
      contact_id: contact.id,
      hasSeen: false,
      id: getUID()
    };

    dispatch(sendMessage(SEND_MESSAGE_PAYLOAD));
  };
  return (
    <section className='conversation'>
      <Header contact={contact} />
      <SendMessageForm
        message={message}
        onChangeInput={changeMessageInputHandler}
        onSendMessage={sendMessageHandler}
      />
    </section>
  );
};

export default Conversation;
