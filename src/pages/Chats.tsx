import { useSelector } from 'react-redux';
import { Outlet, Route, Routes, useParams } from 'react-router-dom';
import Conversation from '../components/Chat/Conversation';
import List from '../components/shared/List';
import { RootState } from '../types/state/rootState';

/**
 *
 * @returns a page containing a list of selectable chats 📩
 */
const ChatsLayout = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  const { contact_id } = useParams<{ contact_id: string }>();

  const contact = contacts.find(c => c.id === contact_id);

  const chats = contacts.map(contact => ({
    lastMessage: {
      message: contact.messages
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)[0].text,
      timestamp: contact.messages
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)[0].timestamp
    },
    unreadCounts: contact.messages.filter(
      message => !message.hasSeen && message.author !== 'me'
    ).length,
    type: 'chat',
    ...contact
  }));

  const newestChats = chats
    .slice()
    .sort((a, b) => b.lastMessage.timestamp - a.lastMessage.timestamp);

  return (
    <div className='chats'>
      <List items={newestChats} />
      <Outlet />
    </div>
  );
};

export default ChatsLayout;
