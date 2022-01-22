import { useSelector } from 'react-redux';
import { Outlet, Route, Routes, useParams } from 'react-router-dom';
import Chat from '../components/Chat';
import List from '../components/shared/List';
import { ChatListItem, ListProp } from '../types/components/shared/list';
import { RootState } from '../types/state/rootState';
import { Contact } from '../types/state/slices/contact';

/**
 *
 * @returns a page containing a list of selectable chats 📩
 */
const ChatsLayout = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  const getUnreadCount = (contact: Contact) =>
    contact.messages.filter(
      message => !message.hasSeen && message.author !== 'me'
    ).length;

  const chatsWithTimestampsAndType: ChatListItem[] = contacts?.map(contact => ({
    lastMessage: {
      message: contact.messages
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)[0].text,
      timestamp: contact.messages
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)[0].timestamp
    },
    unreadCounts: getUnreadCount(contact),
    type: 'chat',
    contact_id: contact.id,
    ...contact
  }));

  const newestChats = chatsWithTimestampsAndType
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
