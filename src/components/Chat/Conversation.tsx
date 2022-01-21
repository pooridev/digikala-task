// External Dependencies
import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Internal Dependencies
import Header from './Header';
import { ConversationProp } from '../../types/components/Chat/Conversation/conversation';
import SendMessageForm from './SendMessageForm';
import { SendMessagePayload } from '../../types/state/payloads/send-message';
import { getUID } from '../../utils/getUID';
import { sendMessage, updateSeenMessage } from '../../state/slices/messages';
import Messages from './Messages';
import { RootState } from '../../types/state/rootState';

/**
 *
 * @returns a section that allows the user to send a message 📩
 */
const Conversation: FunctionComponent<ConversationProp> = () => {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const { contact_id } = useParams<{ contact_id: string }>();

  const contacts = useSelector((state: RootState) => state.contacts);
  const contact = contacts.find(c => c.id === contact_id);

  const changeMessageInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim().length === 0) return;

    const SEND_MESSAGE_PAYLOAD: SendMessagePayload = {
      author: 'me',
      text: message.trim(),
      timestamp: Date.now(),
      contact_id: contact!.id,
      hasSeen: false,
      id: getUID()
    };

    dispatch(sendMessage(SEND_MESSAGE_PAYLOAD));
    clearMessage();
  };

  const clearMessage = () => setMessage('');

  // Update messages as seen when the page is loaded
  useEffect(() => {
    if (contact_id) {
      dispatch(updateSeenMessage({ contact_id }));
    }
  }, [contact_id]);

  return (
    <section className='conversation'>
      <Header contact={contact!} />
      <Messages contact={contact!} />
      <SendMessageForm
        message={message}
        onChangeInput={changeMessageInputHandler}
        onSendMessage={sendMessageHandler}
      />
    </section>
  );
};

export default Conversation;
