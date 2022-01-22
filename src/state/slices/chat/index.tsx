// External dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Internal dependencies
import { initialState } from '../../../constants/contacts-initialstate.';
import { SendMessagePayload } from '../../../types/state/payloads/send-message';
import { UpdateSeenMessagePayload } from '../../../types/state/payloads/update-seen-message';

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    /**
     * Send a message to a contact
     */
    sendMessage: (state, action: PayloadAction<SendMessagePayload>) => {
      const { contact_id } = action.payload;
      state = state.map(contact => {
        if (contact.id === contact_id) {
          contact.messages.push(action.payload);
        }
        return contact;
      });
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
export const { sendMessage, updateSeenMessage } = messageSlice.actions;

export default messageSlice.reducer;
