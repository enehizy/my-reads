import {createStore} from 'redux';
import {bookReducer} from '../reducers';

export const bookStore=createStore(bookReducer,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())