import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ArticleReducer from "./articles/ArticlesSlice";
import WishListReducer from "./wishlist/WishListSlice";
import PaneReducer from "./pane/PaneSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['wishlist'] 
};

const reducers = combineReducers({
    articles: ArticleReducer,
    wishlist: WishListReducer,
    pane: PaneReducer,
  })

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch