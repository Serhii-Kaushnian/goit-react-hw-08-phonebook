// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import persistReducer from 'redux-persist/es/persistReducer';

// import storage from 'redux-persist/lib/storage';

// export const persistAuthConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const persistFilterConfig = {
//   key: 'filter',
//   storage,
// };

// export const persistorAuthReducer = persistReducer(
//   persistAuthConfig,
//   authSlice
// );

// export const persistorFilterReducer = persistReducer(
//   persistFilterConfig,
//   filterSlice
// );

// export const store = configureStore({
//   reducer: {
//     auth: persistorAuthReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     filter: persistorFilterReducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//     contactsApi.middleware,
//   ],
// });

// export const persistor = persistStore(store);
// setupListeners(store.dispatch);

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { contactReducer } from './filter/filterSlice';
import { contactsApi } from './contacts/contactsAPI';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    filter: contactReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
