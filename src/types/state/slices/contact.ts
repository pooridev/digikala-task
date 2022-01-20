import { Message } from './message';

export type Contact = {
  name: string;
  id: string;
  avatar: string;
  mobileNumber: string;
  messages: Message[];
};
