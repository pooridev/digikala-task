// External dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Icon } from '@iconify/react';

// Internal dependencies
import { Message } from './../../types/state/slices/message';
import { getUID } from './../../utils/getUID';
import { Contact } from '../../types/state/slices/contact';

// Assets
import pooriaAvatar from '../../assets/images/avatars/pooria.jpg';
import linuxAvatar from '../../assets/images/avatars/linus.jpg';

const initialState: Contact[] = [
  {
    id: 'linus-Cdt7@er',
    name: 'Linus Torvalds',
    jobTitle: 'Software Engineer',
    messages: [],
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
    messages: [],
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

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    /**
     * Send a message to a contact
     */
    sendMessage: (state, action: PayloadAction<Message>) => {
      const { id } = action.payload;
      const contact = state.find(contact => contact.id === id);
      contact?.messages.push(action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { sendMessage } = contactsSlice.actions;

export default contactsSlice.reducer;
