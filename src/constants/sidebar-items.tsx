// External dependencies
import { Icon } from '@iconify/react';

// Internal dependencies
import { getUID } from '../utils/getUID';

export default [
  {
    title: 'All chats',
    icon: <Icon fontSize='2rem' icon='akar-icons:chat-dots' />,
    path: '/',
    id: getUID()
  },
  {
    title: 'Contacts',
    icon: <Icon fontSize='2rem' icon='system-uicons:contacts' />,
    path: '/contacts',
    id: getUID()
  }
];
