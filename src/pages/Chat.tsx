import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Conversation from '../components/Chat/Conversation';
import List from '../components/shared/List';
import { updateSeenMessage } from '../state/contacts/Contactsslice';
import { RootState } from '../types/state/rootState';

/**
 *
 * @returns a page containing the messages of a chat 📱
 */
const Chat = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  const { contact_id } = useParams<{ contact_id: string }>();
  const contact = contacts.find(c => c.id === contact_id);
  const dispatch = useDispatch();

  // add properties unreadCounts, message & timestamp
  const chats = contacts.slice().map(contact => ({
    lastMessage: {
      message: contact.messages
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)[0].text,
      timestamp: contact.messages
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)[0].timestamp
    },
    unreadCounts: contact.messages.filter(message => !message.hasSeen).length,
    type: 'chat',
    ...contact
  }));

  // sort chats by last message
  const newestChats = chats
    .slice()
    .sort((a, b) => b.lastMessage.timestamp - a.lastMessage.timestamp);

  // Update messages as seen when the page is loaded
  useEffect(() => {
    if (contact_id) {
      dispatch(updateSeenMessage({ contact_id }));
    }
  }, [contact_id]);

  return (
    <div className='chats'>
      <List items={newestChats} />
      <Conversation contact={contact!} />
    </div>
  );
};

export default Chat;
