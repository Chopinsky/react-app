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
      return data.messages[action.payload] ? data.messages[action.payload] : state;

    case "SEND_NEW_MESSAGE":
      let messages = data.messages[action.payload.activeUserId];

      if (!!messages) {
        let message = action.payload.message;
        message["number"] = messages.length;
        messages.push(message);
        data.messages[action.payload.activeUserId] = messages;
        return data.messages;
      } else {
        return state;
      }
  
    default:
      return state;
  }
};

const typingReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_TYPING_VALUE":
      return action.payload;
  
    case "SEND_NEW_MESSAGE":
      return "";

    default:
      return state;
  }
}

const contactReducer = (state = contactInitState, action) => {
  return state;
};

export default combineReducers({
  user: userReducer,
  activeUser: activeUserReducer,
  messages: messageReducer,
  typing: typingReducer,
  contacts: contactReducer
});
