// External dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Icon } from '@iconify/react';

// Internal dependencies
import { Message } from './../../types/state/slices/message';
import { initialState } from '../../constants/contacts-initialstate.';

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
