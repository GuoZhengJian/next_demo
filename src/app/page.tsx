import styles from './styles.module.css'
import MyButton from '../other_client/MyButton'
import T6 from '../other_server/test1'

// 如果导入的是文件夹的话, 那么会默认导入文件夹内的 indexedDB.tsx 文件
import T7 from '../other_server'


import App from '.././test_js/test2'


// 组件化开发
// 注意: React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。
function T1() {
  return (
    <h1>hello world page_t1</h1>
  )
}

// 组件化开发
// 注意: React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。
function T2() {
  return (
    <h1>hello world page_t2</h1>
  )
}

// 组件化开发
// 注意: React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。
function T3() {
  return (
    <div>
      <T1/>
      <T2/>
      <h1>hello world page_t3</h1>
    </div>
  )
}


type DictValue = {
  name: string,
  age: number,
}

// 组件化开发
// 组件参数, 注意: dict_value 是自定义的类型, 类似于python的dict
function T4({ dict_value, number_value }:{ dict_value: DictValue, number_value:number }) {
  return (
    <div>
      <T1/>
      <T2/>
      <h1>hello page_t4: {dict_value.name}, 他的年龄为: {dict_value.age+'(周岁)'}, 他的身高为:{number_value}</h1>
    </div>
  )
}


// 组件化开发
// 做为对象, 并使用 if 来添加
function T5() {
  return (
    <div>
      <h1>hello world page_t5</h1>
    </div>
  )
}


const dict_value = {
  name: 'zhangsan',
  age: 28,
}

function page1() {

  var tt
  if (true) {
    tt = <T5/>
  } else {
    tt = <p>null</p>
  }

  return (
    <div>
      <h1>hello world</h1>
      <T1/>
      <T2/>
      
      <div className={styles.bg_2} >
        <p>组件也是可以嵌套的, 下属是t3组件</p>
        <T3/>
      </div>

      {/* 传参示例, 该示例也适用于函数 */}
      <T4 dict_value={dict_value} number_value={173}/>

      {/* 做为对象, 并使用 if 来添加的示例 */}
      <div className={styles.bg_3}>
        {tt}
      </div>


      {/* 使用条件运算符的示例 */}
      <div className={styles.bg_3}>
        {true ? (<T1/>): (<T2/>)}
      </div>


      {/* 当你不需要 else 分支时，你也可以使用更简短的 逻辑 && 语法： */}
      <div className={styles.bg_3}>
        {true && <T3/>}
      </div>


      <div>
        <MyButton/>
      </div>

      <div>
        <T6/>
        <T7/>
        {/* <script>const mountNode = document.getElementById('container');</script> */}
        {/* createRoot(document.getElementById('container')).render(<App />); */}
        <App />
      </div>

      
    </div>
  )
}



function MyButton1() {

  // 这是一个事件处理函数，当用户点击按钮时会被调用。
  function handleClick() {
    // alert 是一个 JavaScript 函数，用于弹出一个警告框
    alert('这是一个警告弹窗!');
  }
  return (
    <button onClick={handleClick}>
      点我
    </button>
  );
}



// console.log("MyButton1: ", MyButton1())


// export default page



function my_test() {
  return (
    <div>
      <h1>
        hello world 2
        </h1>
    </div>
  )  
}

export default my_test





import note1 from '../_learn_note/01_类型'
import note2 from '../_learn_note/02_函数|条件判断|逻辑'
// note1
note2
