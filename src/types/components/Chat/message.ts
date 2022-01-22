import { Message as MessageType } from '../../state/slices/message';
import { Contact } from '../../state/slices/contact';

export type Message = { message: MessageType } & Contact;
