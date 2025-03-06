'use client'

// debugger

var a:number = 123

// 你可以通过在组件中声明 事件处理 函数来响应事件：
// 事件函数必需在客户端调用, 无法在服务器端调用
export default function MyButton() {

    // 这是一个事件处理函数，当用户点击按钮时会被调用。
    function handleClick() {
      // alert 是一个 JavaScript 函数，用于弹出一个警告框
      alert('这是一个警告弹窗1123!');
    }
    return (
      <button onClick={handleClick}>
        点我
      </button>
    );
  }

// 这行代码无法运行, 所以不知道如何调试
// console.log('__MyButton__', MyButton())