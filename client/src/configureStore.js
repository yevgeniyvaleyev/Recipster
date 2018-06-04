import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import reducers from './reducers';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import mySaga from './actions/sagas';

const configureStore = () => {
  const middlewares = [];
  const saga = createSagaMiddleware();

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  middlewares.push(saga);

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
  
  saga.run(mySaga);

  return { store, persistor }
};

export default configureStore;
