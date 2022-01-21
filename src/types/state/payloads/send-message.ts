import { Message } from '../slices/message';

export type SendMessagePayload = { contact_id: string } & Message;
