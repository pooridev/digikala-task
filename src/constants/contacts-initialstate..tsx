import { Icon } from '@iconify/react';

import { Contact } from '../types/state/slices/contact';
import { getUID } from '../utils/getUID';

// Assets
import pooriaAvatar from '../assets/images/avatars/pooria.jpg';
import linuxAvatar from '../assets/images/avatars/linus.jpg';

export const initialState: Contact[] = [
  {
    id: 'linus-Cdt7@er',
    name: 'Linus Torvalds',
    jobTitle: 'Software Engineer',
    messages: [
      {
        id: getUID(),
        hasSeen: false,
        text: 'Hi buddy 👋',
        timestamp: new Date('2000/11/10').getTime(),
        author: 'linus-Cdt7@er'
      },
      {
        id: getUID(),
        hasSeen: false,
        text: 'How are you? 😊',
        timestamp: new Date('2000/11/11').getTime(),
        author: 'linus-Cdt7@er'
      }
    ],
    socials: [
      {
        icon: <Icon fontSize='2.2rem' icon='ant-design:instagram-outlined' />,
        url: 'https://www.instagram.com/linus.torvalds/',
        id: 'instagram-' + getUID()
      },
      {
        icon: <Icon fontSize='2.2rem' icon='eva:github-outline' />,
        url: 'https://github.com/torvalds',
        id: 'github-' + getUID()
      }
    ],
    mobileNumber: '+49 123456789',
    avatar: linuxAvatar
  },
  {
    id: 'pooria-XtE&xfV',
    name: 'Pooria',
    jobTitle: 'Front End Engineer',
    messages: [
      {
        id: getUID(),
        hasSeen: true,
        text: 'Just finished my first React project!',
        timestamp: new Date('2000/11/09').getTime(),
        author: 'pooria-XtE&xfV'
      },
      {
        id: getUID(),
        hasSeen: false,
        text: 'WOW 😍',
        timestamp: new Date('2000/11/10').getTime(),
        author: 'me'
      },
      {
        id: getUID(),
        hasSeen: false,
        text: 'So proud of you! 😎',
        timestamp: new Date('2000/11/12').getTime(),
        author: 'me'
      }
    ],
    socials: [
      {
        icon: <Icon fontSize='2.2rem' icon='ant-design:instagram-outlined' />,
        url: 'https://www.instagram.com/this.pooria/',
        id: 'instagram-' + getUID()
      },
      {
        icon: <Icon fontSize='2.2rem' icon='eva:github-outline' />,
        url: 'https://www.instagram.com/this.pooria/',
        id: 'github-' + getUID()
      }
    ],
    mobileNumber: '+98 123456789',
    avatar: pooriaAvatar
  }
];
