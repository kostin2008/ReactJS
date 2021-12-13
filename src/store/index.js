import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';
import { chatsReducer } from './chats';
import { valuesReducer } from './values';
import { postsReducer } from './posts';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['posts'],
}

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  values: valuesReducer,
  posts: postsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
  persistedReducer,
  composeEnchancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);