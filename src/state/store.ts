import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/Contactsslice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  }
});
