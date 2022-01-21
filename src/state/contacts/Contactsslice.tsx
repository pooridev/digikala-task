// External dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Icon } from '@iconify/react';

// Internal dependencies
import { Message } from './../../types/state/slices/message';
import { initialState } from '../../constants/contacts-initialstate.';
import { AddMessagePayload } from '../../types/state/payloads/add-message';
import { UpdateSeenMessagePayload } from '../../types/state/payloads/update-seen-message';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    /**
     * Send a message to a contact
     */
    sendMessage: (state, action: PayloadAction<AddMessagePayload>) => {
      const { id } = action.payload;
      const contact = state.find(contact => contact.id === id);
      contact?.messages.push(action.payload);
    },
    /**
     * Update messages as seen
     */
    updateSeenMessage: (
      state,
      action: PayloadAction<UpdateSeenMessagePayload>
    ) => {
     // debugger
      const { contact_id } = action.payload;
      state = state.map(contact => {
        if (contact.id === contact_id) {
          contact.messages.forEach(message => {
            message.hasSeen = true;
          });
        }
        return contact;
      });
    }
  }
});

// Action creators are generated for each case reducer function
export const { sendMessage, updateSeenMessage } = contactsSlice.actions;

export default contactsSlice.reducer;
