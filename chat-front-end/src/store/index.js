import { createStore } from 'redux';
import reducer from './reducer';
import data from "./mockData";

const initState = { contacts: data.contacts };
const store = createStore(reducer, initState);

export default store;