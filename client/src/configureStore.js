import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import reducers from './reducers';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

const configureStore = () => {
  const middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  middlewares.push(thunk);

  const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, reducers)
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);

  return { store, persistor }
};

export default configureStore;
