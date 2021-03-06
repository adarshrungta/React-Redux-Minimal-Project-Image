import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList, usersAddEdit, usersDelete } from "./users";
import { imagesFetchList } from "./images";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeLatest, 'IMAGES_FETCH_LIST', imagesFetchList),
    fork(takeLatest, 'USERS_ADD_EDIT', usersAddEdit),
    fork(takeLatest, 'USERS_DELETE', usersDelete),
  ];
}
