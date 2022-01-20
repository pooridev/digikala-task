import { Message } from './../slices/message';

export type AddMessagePayload = {
  contactId: string;
  message: Message;
};
