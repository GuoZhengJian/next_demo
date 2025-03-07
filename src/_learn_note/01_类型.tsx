
// 要想使 src/test_js/test3.tsx 子模块中的内容被渲染, 必须要在 src/app/page.tsx 中导入并实例化才能被渲染
export default {}

// 类型
// ==============================================================================================
const x0 = 10               // 隐式类型推断声明
const x1 : number = 8       // 数值
const x2 : string = '8'     // 字符
const x3 : boolean = false  // 布尔
const x4: any = 1           // 任意类型
const x5: void = undefined  // void类型表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void
console.log('01_类型 | ', 'x0:', typeof(x0), x0)
console.log('01_类型 | ', 'x1:', typeof(x1), x1)
console.log('01_类型 | ', 'x2:', typeof(x2), x2)
console.log('01_类型 | ', 'x3:', typeof(x3), x3)
console.log('01_类型 | ', 'x4:', typeof(x4), x4)
console.log('01_类型 | ', 'x5:', typeof(x5), x5)

// 属性重命名-------------------------------------------------------
const new_x1 = x1
console.log('01_类型 | ', 'new_x1:', typeof(new_x1), new_x1, new_x1 == x1)
// 输出: new_x1: number 8 true


// 数组-------------------------------------------------------

var list1: number[] = [1,2,3,4,5]         // 数值数组
var list2: any[] = [1,'2',false]          // 任意类型数组
var list3: Array<number> = [1,2,3,4,5]    // 数值数组泛型
var list4: Array<any> = [1,'2',false]     // 任意类型数组泛型
console.log('01_类型 | ', 'list1:', typeof(list1), list1)
console.log('01_类型 | ', 'list2:', typeof(list2), list2)
console.log('01_类型 | ', 'list3:', typeof(list3), list3)
console.log('01_类型 | ', 'list4:', typeof(list4), list4)

// 数组合并-------------------------------------------------------
var list1: number[] = [1,2,3,4,5]
var list2: any[] = [6,7,8,9]   
var list5 = [...list1, ...list2, 10, 11, 12]    // 通过 ... 解构的方式来实现数组合并
console.log('01_类型 | ', 'list3:', typeof(list5), list5)
// 输出: [1,  2, 3, 4,  5,6,  7, 8, 9, 10,11, 12]


// 数组解构-------------------------------------------------------

let [a,b,c] = [1,'2',false]     // 数组解构
console.log('01_类型 | ', '数组解构1:', typeof(a),typeof(b),typeof(c), a, b, c, [a,b,c])
// 输出: number string boolean 1 2 false [ 1, '2', false ]

let [e, ...f] = [1,'2',3,'4',5]     // 数组解构 (可以使用...语法创建剩余变量)
console.log('01_类型 | ', '数组解构2:', typeof(e),typeof(f), e, f, [e, f])
//输出: number object 1 [ '2', 3, '4', 5 ] [ 1, [ '2', 3, '4', 5 ] ]

let [g] = [1,'2',3,'4',5]     // 数组解构 (仅结构第一个数组元素)
console.log('01_类型 | ', '数组解构3:', typeof(g), g, [g])
//输出: number 1 [ 1 ]

// 对象解构-------------------------------------------------------

let { dict_1, dict_2, dict_3} = {dict_1:1, dict_2:'2', dict_3:3}   // 对象解构
console.log('01_类型 | ', '对象解构1:', dict_1, dict_2, dict_3)     // 输出: 1 2 3


let dict = {dict_a: 1, dict_b: '2', dict_c: 3}
let { dict_a, dict_b, dict_c } = dict   // 对象解构
console.log('01_类型 | ', '对象解构2:', typeof(dict_a), typeof(dict_b), typeof(dict_c), dict_a, dict_b, dict_c, { dict_a, dict_b, dict_c })
// 对象解构1: number string number 1 2 3 { dict_a: 1, dict_b: '2', dict_c: 3 }

// "对象解构" 的其他用法和 "数组解构" 相同, 包括:
//     使用...语法创建剩余变量
//     仅结构第一个数组元素

// js中的对象, 其实跟py中的dict很像, 例如:
// .js
let dict_obj = {
    'suits': ["hearts", "spades", "clubs", "diamonds"],
    'cards': '1'
}
console.log('01_类型 | ', dict_obj.suits) //输出 ["hearts", "spades", "clubs", "diamonds"]
// 上述js代码等效下述py代码
// .py
// dict_obj = {
//     'suits': ["hearts", "spades", "clubs", "diamonds"],
//     'cards': '1'
// }
// print(dict_obj['suits']) //输出 ['hearts', 'spades', 'clubs', 'diamonds']


// -------------------------------------------------------

let tuple: [number, string, boolean]    // 元组, 元组需要先定义, 在赋值, 元组无法设置为 const
tuple = [1, '2', false]
console.log('01_类型 | ', 'tuple:', typeof(tuple), tuple)

// -------------------------------------------------------

function my_error():never {while(true){}}   // 当一个函数没有任何返回值, 那么它可以指定为never类型, 但是这基本上不会常用



// 模板字符串
// ==============================================================================================
// JavaScript 使用反引号（\）和${}` 语法来实现模板字符串
let f1 = 'world';

// 使用模板字符串 (注意不是引号" 而是反引号 `)
console.log('01_类型 | ', `hello ${f1}`); // 相当于 print(f'hello {"world"}')

// 使用字符串格式化函数
console.log('01_类型 | ', 'hello ' + f1); // 相当于 print('hello {}'.format("world"))



// 类型断言
// ==============================================================================================
// 先说两个概念: "编译时" 和 "运行时", 他们的关系是: ts 负责将代码编译为 js 代码, 然后由 js 去运行代码
// 断言是 ts 在编译代码的时候, 有时候 ts 并不确定某个对象是什么类型, 此时你可以使用类型 "断言" 来明确的告诉 ts 把某个类型做为 "***" 类型去编译为 js 代码, 这可以避免类型错误，提高代码的可靠性
// 例如, 下述有一个任意类型的变量, 虽然 ts 的类型推断在绝大部分情况下都是可以推断正确的, 但是在当你自己可以确定, 但是 ts 无法正确推断对象的属性时, 就可以使用断言, 来为ts明确的指定类型, 以便 ts 可以正确的编译
let response: any = "hello world"
let data1: string = `${(response as string)} ${"Guo"}`
let data2: number = (response as string).length as number
console.log('01_类型 | ', 'data1:', typeof(data1), data1)  // data1: string hello world Guo
console.log('01_类型 | ', 'data2:', typeof(data2), data2)  // data2: number 11

// 扩展阅读
// 1.类型断言（Type Assertion）是 TypeScript 中的一种机制，用于明确告诉编译器某个值的具体类型。
// 在某些情况下，编译器无法自动推断出准确的类型，而开发者可以通过类型断言来提供这些信息。
//
// 2."断言"（Assertion）在编程中通常表示一种明确的声明或假设。
// 在类型断言的上下文中，开发者在告诉编译器："我断言（声明）这个值的类型是 X。" 这种声明有助于编译器在静态类型检查时准确识别变量类型，从而避免类型错误。




// 比较判断
// ==============================================================================================
// JS的 "===" 相当于python的 "is"
const is_l1: number[] = [1,2,3,4,5]
const is_l2: number[] = [1,2,3,4,5]
console.log('01_类型 | ', 'list is:', is_l1 === is_l2)    // 输出: list is: false
// list2 和 list4 分别引用了不同的内存地址，因此 list2 === list4 比较的是两个不同的引用，结果为 false。

// JS的三方库函数 "isEqual" 相当于python的 "=="
// 两种写法(1/2)
import isEqual from 'fast-deep-equal';
console.log('01_类型 | ', 'list is2:', isEqual(is_l1, is_l2))    // 输出: list is: true

// 两种写法(2/2)
// require 是 Node.js中用于引入模块的一种方式。它允许你在当前文件中使用其他文件或库中定义的功能。
let equal = require('fast-deep-equal');
console.log('01_类型 | ', 'list is3:', equal(is_l1, is_l2)); // 输出: list is: true



// 枚举
// ==============================================================================================
enum Color {A, B, C}                // 枚举 Color 包含了三个成员A,B,C, 这三个成员都是常量, 他们的值就是他们的索引(起始为0)
// enum Color {A=2, B, C}           // 不过, 可以手动的指定起始的位置
// enum Color {A=2, B=5, C=9}       // 或者, 全部手动的指定索引位置
let enum_value: Color = Color.A;    // 声明了一个名为 enum_value 的变量，其类型为 Color 枚举, 其值为索引值
console.log(typeof(enum_value), // number
            enum_value,         // 0
            Color.A,            // 0
            Color.B,            // 1
            Color.C,            // 2
            Color[0],           // A
            Color[1],           // B
            Color[2],           // C
            )