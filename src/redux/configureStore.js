import storage from 'redux-persist/lib/storage';
import { rootReducer } from 'redux/contactsSlice';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
