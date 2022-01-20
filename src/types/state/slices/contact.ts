import { Message } from './message';

export type Contact = {
  socials: Array<{
    id: string;
    url: string;
    icon: JSX.Element;
  }>;
  jobTitle: string;
  name: string;
  id: string;
  avatar: string;
  mobileNumber: string;
  messages: Message[];
};
