export type ContactListItem = {
  name: string;
  contact_id: string;
  avatar: string;
  mobileNumber: string;
  type: 'contact';
};

export type ChatListItem = {
  lastMessage: {
    message: string;
    timestamp: number;
  };
  unreadCounts: number;
  name: string;
  avatar: string;
  contact_id: string;
  type: 'chat';
};

export type ListProp = {
  items: Array<ChatListItem | ContactListItem>;
};

export type ListItemProp = {
  item: ChatListItem | ContactListItem;
};
