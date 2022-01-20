import { useSelector } from 'react-redux';
import List from '../components/shared/List/List';
import { RootState } from '../types/state/rootState';

/**
 *
 * @returns a page containing a list of selectable chats 📩
 */
const ChatsList = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  const chats = contacts.map(contact => ({
    lastMessage: {
      message: contact.messages
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)[0].text,
      timestamp: contact.messages
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp)[0].timestamp
    },
    type: 'chat',
    ...contact
  }));

  const newestContactsChats = chats
    .slice()
    .sort((a, b) => b.lastMessage.timestamp - a.lastMessage.timestamp);

  return (
    <div className='chats'>
      <List items={newestContactsChats} />
      <div role='presentation' className='chats-background' />
    </div>
  );
};

export default ChatsList;
