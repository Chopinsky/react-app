import { combineReducers } from "redux";
import data from "./mockData";

const userInitState = data.user;
const activeUserState = data.activeUserId;
const msgInitState = data.messages;
const contactInitState = data.contacts;

const userReducer = (state = userInitState, action) => {
  return state;
};

const activeUserReducer = (state = activeUserState, action) => {
  return null;
};

const messageReducer = (state = msgInitState, action) => {
  return state;
};

const contactReducer = (state = contactInitState, action) => {
  return state;
};

export default combineReducers({
  user: userReducer,
  activeUserId: activeUserReducer,
  messages: messageReducer,
  contacts: contactReducer
});
