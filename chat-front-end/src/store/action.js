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