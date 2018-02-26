import { call, put } from "redux-saga/effects";
//import ApiUsers from "../api/users";
import ApiImages from "../api/images";

// fetch the user's list
// export function* usersFetchList(action) {
//   // call the api to get the users list
//   const users = yield call(ApiUsers.getList);

//   // save the users in state
//   yield put({
//     type: 'USERS_LIST_SAVE',
//     users: users,
//   });
// }

export function* imagesFetchList(action) {
  // call the api to get the users list
  const images = yield call(ApiImages.getAllimages);

  // save the users in state
  yield put({
    type: 'IMAGES_LIST_SAVE',
    images: images,
  });
}


