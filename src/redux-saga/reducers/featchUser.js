// reducers.js
const initialState = {
    user: null,
    error: null,
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_USER_SUCCESS':
        return { ...state, user: action.user };
      case 'FETCH_USER_FAILED':
        return { ...state, error: action.message };
      default:
        return state;
    }
  }
  
  export default reducer;
  