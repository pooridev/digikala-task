// External Dependencies
import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// Internal Dependencies
import Header from './Header';
import { ChatProp } from '../../types/components/Chat/chat';
import SendMessageForm from './SendMessageForm';
import { SendMessagePayload } from '../../types/state/payloads/send-message';
import { getUID } from '../../utils/getUID';
import { sendMessage, updateSeenMessage } from '../../state/slices/chat';
import Messages from './Messages';
import { RootState } from '../../types/state/rootState';

/**
 *
 * @returns a section that allows the user to send a message 📩
 */
const Chat: FunctionComponent<ChatProp> = () => {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { contact_id } = useParams<{ contact_id: string }>();

  const contacts = useSelector((state: RootState) => state.contacts);
  const contact = contacts.find(c => c.id === contact_id);

  const changeMessageInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const validateSendMessageForm = () => message.trim().length >= 1;

  const sendMessageHandler = (e: FormEvent) => {
    e.preventDefault();

    let timerId: NodeJS.Timeout;

    // Clear the timer if it's already running
    clearTimeout(timerId!);

    // Prevent sending an empty message
    const isValid = validateSendMessageForm();
    if (!isValid) return;

    const SEND_MESSAGE_PAYLOAD: SendMessagePayload = {
      author: 'me',
      text: message.trim(),
      timestamp: Date.now(),
      contact_id: contact!.id,
      hasSeen: false,
      id: getUID()
    };

    // Send the message after 2 seconds
    timerId = setTimeout(
      () => dispatch(sendMessage(SEND_MESSAGE_PAYLOAD)),
      2000
    );

    // Clear the input field after sending the message
    clearMessage();
  };

  const clearMessage = () => setMessage('');

  useEffect(() => {
    // If the contact is not found, navigate to the chats
    if (!contact) return navigate('/');

    // Update messages as seen when the page is loaded
    if (contact_id) dispatch(updateSeenMessage({ contact_id }));
  }, [contact_id]);

  return (
    <section className='chat'>
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

export default Chat;
