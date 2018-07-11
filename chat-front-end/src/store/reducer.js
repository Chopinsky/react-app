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
  switch (action.type) {
    case "SET_ACTIVE_USER_ID":  
      return action.payload
  
    default:
      return state;
  }
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
