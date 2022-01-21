import { FunctionComponent } from 'react';

import Header from './Header';
import { ConversationProp } from '../../types/components/Chat/Conversation/conversation';
import SendMessageForm from './SendMessageForm';

/**
 *
 * @returns a section that allows the user to send a message 📩
 */
const Conversation: FunctionComponent<ConversationProp> = ({ contact }) => {
  return (
    <section className='conversation'>
      <Header contact={contact} />
      <SendMessageForm />
    </section>
  );
};

export default Conversation;
