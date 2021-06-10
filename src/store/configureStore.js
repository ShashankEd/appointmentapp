import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer, REHYDRATE} from 'redux-persist';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {mapValues} from 'lodash';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {checkWhetherAppointmentBooked} from './appReducers/checkWhetherAppointmentBooked'
const appReducers = {
  checkWhetherAppointmentBooked
};

const appReducer = combineReducers(appReducers);
const rootReducer = (
  state,
  action,
) => {
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [], // Names of reducers which will be persisted.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, logger),
);
export const persistor = persistStore(store);
