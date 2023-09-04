import { createStore } from 'redux';
import { cardReducer } from './Reducer';

const store = createStore(cardReducer);

export default store;
