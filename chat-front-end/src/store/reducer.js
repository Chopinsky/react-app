import { combineReducers } from "redux";
import data from "./mockData";

const userInitState = data.user;
const msgInitState = data.messages;
const contactInitState = data.contacts;

const userReducer = (state = userInitState, action) => {
  return state;
};

const activeUserReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      return action.payload
  
    default:
      return state;
  }
};

const messageReducer = (state = msgInitState, action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      console.log(action.payload)
      return data.messages[action.payload] ? data.messages[action.payload] : state;
  
    default:
      return state;
  }
};

const contactReducer = (state = contactInitState, action) => {
  return state;
};

export default combineReducers({
  user: userReducer,
  activeUser: activeUserReducer,
  messages: messageReducer,
  contacts: contactReducer
});
