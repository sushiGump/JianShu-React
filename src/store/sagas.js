import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";

function* fetchInitList() {
  try {
    const res = yield axios.get("/list.json");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("获取数据失败");
  }
}

//generator 函数
function* mySagas() {
  //takeEvery 的含义：只要接收到 GET_INIT_LIST 这个 action ，就会去执行 fetchUser
  yield takeEvery(GET_INIT_LIST, fetchInitList);
}

export default mySagas;
