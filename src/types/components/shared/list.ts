export type ContactListItem = {
  name: string;
  avatar: string;
  id: string;
  type: 'contact' | 'contact';
};

export type ChatListItem = {
  lastMessage: string;
  name: string;
  avatar: string;
  date: string;
  id: string;
  mobileNumber: string;
  type: 'chat' | 'contact';
};

export type ListProp = {
  items: Array<ChatListItem & ContactListItem>;
};

export type ListItemProp = {
  item: ChatListItem & ContactListItem;
};
