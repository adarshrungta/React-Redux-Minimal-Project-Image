
// users reducer
export default function userdetails(state = {}, action) {
  switch (action.type) {
    case 'USER_DETAILS_FETCH':
      return action.payload;

    // initial state
    default:
      return state;
  }
}


