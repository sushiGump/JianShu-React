/*
 * @Author: ganyunxi
 * @Date: 2020-08-09 23:30:16
 * @LastEditTime: 2020-08-12 00:33:02
 * @LastEditors: Please set LastEditors
 * @Description: 创建 store 用于集中管理 react 项目中的状态数据
 * @FilePath: \my-app\src\store\index.js
 */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import todoSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas);

export default store;
