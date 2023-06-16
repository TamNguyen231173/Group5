// import { pokemonApi } from '@redux-setup/api';
import { AuthReducer, ThemeReducer, UserReducer } from '@reduxs/reducers'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import EncryptedStorage from 'react-native-encrypted-storage'
import { apiService } from '@reduxs/api/apiService'
import { RootReducerName } from '@reduxs/reducers/type'

const rootReducer = combineReducers({
  auth: AuthReducer,
  themeApp: ThemeReducer,
  // ...other reducers here
  user: UserReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  timeout: 30000,
  whitelist: [RootReducerName.auth, RootReducerName.user],
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    root: persistedReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiService.middleware),
})

export const persistor = persistStore(store)
