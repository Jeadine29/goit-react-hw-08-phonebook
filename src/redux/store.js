import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsReducer";
import statusReducer from "./status/statusReducer";

const userBookConfig = {
  key: "userBook",
  storage,
  whitelist: ["token"],
};

const statusConfig = {
  key: "status",
  storage,
  whitelist: ["remember"],
};

export const store = configureStore({
  reducer: {
    userBook: persistReducer(userBookConfig, contactsReducer),
    status: persistReducer(statusConfig, statusReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
