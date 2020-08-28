import React, { Component } from "react";

import PropsTypes from "prop-types";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick() {
    this.props.handleItemDelete(this.props.index);
  }

  shouldComponentUpdate(nextProps, nextState) {
    /* 进行性能的优化：尤其针对子组件并没改变完全因父组件渲染而渲染的情形 */
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
 

  render() {
    console.log('child render')
    return <div onClick={this.handleItemClick}>{this.props.content}</div>;
  }
}
TodoItem.PropsTypes = {
  content: PropsTypes.string.isRequired,
  index: PropsTypes.number,
  deleteItem: PropsTypes.func,
};
