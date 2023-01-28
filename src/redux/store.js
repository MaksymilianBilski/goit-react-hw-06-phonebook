import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers';

export const initialState = {
  contacts: [],
  filter: '',
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
