export type ContactListItem = {
  name: string;
  id: string;
  avatar: string;
  mobileNumber: string;
};

export type ChatListItem = {
  lastMessage: {
    message: string;
    timestamp: number;
  };
  unreadCounts: number;
  name: string;
  avatar: string;
  date: string;
  id: string;
  mobileNumber: string;
  type: 'chat' | 'contact';
};

export type ListProp = {
  items: Array<ChatListItem | ContactListItem>;
};

export type ListItemProp = {
  item: ChatListItem | ContactListItem;
};
