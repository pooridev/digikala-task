import { configureStore } from '@reduxjs/toolkit';

import messageReducer from './slices/messages';

export const store = configureStore({
  reducer: {
    contacts: messageReducer
  }
});
