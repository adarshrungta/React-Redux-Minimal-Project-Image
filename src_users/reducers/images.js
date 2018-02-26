// images reducer
export default function images(state = {}, action) {
  switch (action.type) {
    case 'IMAGES_LIST_SAVE':
      return action.images;

    // initial state
    default:
      return state;
  }
}

