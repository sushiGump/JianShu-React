import React from "react";
import { useState } from "react";

//函数组件和类组件
const element = <div>Hello world</div>;
//其实这个函数组件和类组件本质也就是返回的一个 <div> 标签
const Element = () => {
  return <div>Hello World</div>;
};
class Element extends Component {
  render() {
    return <div>Hello World</div>;
  }
}

//所有 React 组件都必须像纯函数一样保护它们的 props 不被更改

//在 JSX 类型中使用点语法
const MyComponent = {
  DataPicker: function DatePicker(props) {
    return <div> Imagine a {props.color} datapicker here.</div>;
  },
};

function BlueDataPicker() {
  return <MyComponent.DataPicker color="blue" />;
}

//if 语句以及 for 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。但是，可以用在 JSX 以外的代码中；
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }

  return (
    <div>
      {props.number} is an {description} number
    </div>
  );
}

//Props 默认值为 "True"，和 ES6 对象简写容易混淆，ES6 中{foo} 是 {foo : foo} 的简写；
//属性默认为 True 只是为了保持和 HTML 中标签属性的行为一致
<MyDemo1 autocomplete={true} />;

{
  /* <MyDemo autocomplete /> */
}

//属性展开，如果已经有了一个 props 对象，你可以使用展开运算符 ... 来在 JSX 中传递整个 props 对象
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}
function App2() {
  const props = { firstName: "Ben", lastName: "Hector" };
  return <Greeting {...props} />;
}

const Button = (props) => {
  const { kind, ...otherProps } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...otherProps} />;
};
const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!!!
      </Button>
    </div>
  );
};

//包含在开始和结束标签之间的 JSX 表达式内容将作为特定属性 props.children 传递给外层组件。
<MyComponentD>Hello World</MyComponentD>; //props.children 的值就是未经转义的字符串 Hello World

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenthings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

//布尔类型、Null 以及 Undefined 将会忽略该表达式，这有助于依据特定条件来渲染其他的组件，所以当 showHeader 为 true 时 <Header/> 组件才会渲染
<div>
  {showHeader && <Header />}
  <Content />
</div>;

//但是需要注意：有一些 falsy 值，例如数字 0 仍然会被 React 渲染，所以要确保 && 之前的表达式总是布尔值
//<div>{porps.message.length && <Message />}</div>
<div>{props.message.length > 0 && <Message />}</div>;

//反之，如果真的想在 React 渲染 false、true、null、undefined 等值，需要先将它们转换为字符串
<div>My JavaScript variable is {String(myVariable)}.</div>;

//注意在函数组件中没有 this ，所以我们不能分配或读取 this.state。
const LoginControl = () => {
  //这里方括号代表了 数组解构
  const [isLoggedIn, , setIsLoggedIn] = useState(false);
  // let button;
  // if (isLoggedIn) {
  //   button = <LogoutButton onClick={handleLogoutClick} />;
  // } else {
  //   button = <LoginButton onClick={handleLoginClick} />;
  // }

  handleLoginClick = () => {
    setIsLoggedIn(false);
  };
  handleLogoutClick = () => {
    setIsLoggedIn(true);
  };

  // return <Greeting isLoggedIn={isLoggedIn}>{button}</Greeting>;
  return (
    <div>
      {isLoggedIn ? (
        <LoginButton onClick={handleLoginClick} />
      ) : (
        <LogoutButton onClick={handleLogoutClick} />
      )}
    </div>
  );
};

//隐藏/显示 切换组件
const WarningBanner = () => {
  if (!porps.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
};
const Page = () => {
  const [showWarning, setWarning] = useState(true);
  handleToggleClick = () => {
    setWarning(!showWarning);
  };
  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? "Hide" : "Show"}
      </button>
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));

//在组件的 render 方法中返回 null 并不会影响组件的生命周期函数，在上面这个实例中，componentDidUpdate 依然会被调用
