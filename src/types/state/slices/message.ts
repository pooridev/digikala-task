export type Message = {
  id: string;
  text: string;
  timestamp: number;
  hasSeen: boolean;
  author: string | 'me';
};
