import { FunctionComponent } from 'react';

import Header from './Header';
import { ConversationProp } from '../../types/components/Chat/Conversation/conversation';

/**
 *
 * @returns a section that allows the user to send a message 📩
 */
const Conversation: FunctionComponent<ConversationProp> = ({ contact }) => {
  return (
    <section className='conversation'>
      <Header contact={contact} />
    </section>
  );
};

export default Conversation;
