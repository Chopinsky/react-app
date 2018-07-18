export const setActiveUser = (user) => {
  return {
    type: "SET_ACTIVE_USER",
    payload: user,
  }
}

export const getMessages = (user) => {
  return {
    type: "GET_MESSAGES",
    payload: user ? user.userId : null,
  }
}

export const setTypingValue = (value) => {
  return {
    type: "SET_TYPING_VALUE",
    payload: value,
  }
}

export const sendNewMessage = (text, activeUserId, isUserMsg) => {
  return {
    type: "SEND_NEW_MESSAGE",
    payload: {
      message: {
        isUserMsg,
        text,
      },
      activeUserId,
    },
  }
}