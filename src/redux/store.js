import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filterReducer from './filter/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
