/*
 * @Author: ganyunxi
 * @Date: 2020-08-05 23:58:59
 * @LastEditTime: 2020-08-12 00:14:17
 * @LastEditors: Please set LastEditors
 * @Description: 实现 todolist 主要功能页面的容器组件
 * @FilePath: \my-app\src\App.js
 */
import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store/index";
import {
  getChangeInputValue,
  getAddTodoItem,
  getDeleteTodoItem,
  getInitList,
} from "./store/actionCreators";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  componentDidiMount() {
    const action = getInitList();
    store.dispatch(action);
  }

  //监听store中数据的变化
  handleStoreChange = () => {
    this.setState(store.getState());
  };

  handleInputChange = (e) => {
    // 创建action
    const action = getChangeInputValue(e.target.value);
    //想要将创建好的用于传话的 action 传递给 store
    store.dispatch(action);
  };

  handleBtnClick = () => {
    //点击按钮之后要将输入框中的内容（reducer 中的 inputValue）显示到列表项中
    const action = getAddTodoItem();
    store.dispatch(action);
  };
  handleDeleteItem = (index) => () => {
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  };

  render() {
    return (
      <div>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: "300px", height: "25px", marginRight: "10px" }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ width: "300px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDeleteItem(index)}>{item}</List.Item>
          )}
        />
      </div>
    );
  }
}
