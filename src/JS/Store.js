import { createStore } from 'redux';
import { cardReducer } from './Reducer';

const store = createStore(cardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
