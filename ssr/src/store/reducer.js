const initState = {
  message: null,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message,
      };
  
    default:
      return state;
  }
};