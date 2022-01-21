import { Message as StateMessageType } from './../../../state/slices/message';
import { Contact } from './../../../state/slices/contact';

export type Message = { message: StateMessageType } & Contact;
