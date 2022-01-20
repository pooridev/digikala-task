import { Message } from './../../types/state/slices/message';
import { getUID } from './../../utils/getUID';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Contact } from '../../types/state/slices/contact';

const initialState: Contact[] = [
  {
    name: 'Linus Torvalds',
    id: 'linus-' + getUID(),
    messages: [],
    mobileNumber: '+49 123456789',
    avatar: '/public/images/avatars/linux.jpg'
  },
  {
    name: 'Mehdi',
    id: 'mehdi-' + getUID(),
    messages: [],
    mobileNumber: '+98 123456789',
    avatar: '/public/images/avatars/mehdi.jpg'
  }
];

export const contactsSlice = createSlice({
  name: 'counter',
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
