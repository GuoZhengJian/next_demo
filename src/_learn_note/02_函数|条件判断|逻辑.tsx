import { AndroidFilled } from "@ant-design/icons"
import { count } from "console"

// 要想使 src/test_js/test3.tsx 子模块中的内容被渲染, 必须要在 src/app/page.tsx 中导入并实例化才能被渲染
export default {}





// 函数
// ==============================================================================================

function create_func1 () {return 123}
console.log('create_func1: ', create_func1())


function create_func2 (x:number, y:number):number {return x + y}
// 该函数接收 number 类型的参数x,y, 然后然后一个 number 类型的值
console.log('create_func2: ', create_func2(1, 2))


function create_func3 (x:number, y:number):string {return (x+y).toString()}
// 该函数接收 number 类型的参数x,y, 然后然后一个 string 类型的值
console.log('create_func3: ', create_func3(1, 2))


function create_func3_1 (x:number, y:number):{name:string, age:number} {return {name: 'zhangsan', age: x+y}}
// 该函数接收 number 类型的参数x,y, 然后然后一个 "自定义" 类型的值, 该类型是一个对象, 里面包含 name 和 age 两个属性
console.log('create_func3_1: ', create_func3_1(1, 2), create_func3_1(1, 2).name, create_func3_1(1, 2).age) // 输出: { name: 'zhangsan', age: 3 } zhangsan 3


function create_func4 (x:number, y:number, z:number=10, h?:number):string { if (h) {return (x+y+z+h).toString()} else {return (x+y+z).toString()} }
// h? 是可选参数 (注意: 可选参数必须跟在必须参数后面)
console.log('create_func4: ', create_func4(1, 2))       // 输出 1+2+10 = 13
console.log('create_func4: ', create_func4(1, 2, 3, 4))    // 输出 1+2+3+4 = 10
// 上述函数无法通过指定参数传参
//
// 下述函数可以通过指定参数传参
type create_func5_args = {x:number, y:number, z?:number, h?:number} // 这些东西都是函数的属性
function create_func5 ({x, y, z=10, h}:create_func5_args):string { if (z&&h) {return (x+y+z+h).toString()} else {return (x+y+z).toString()} } // 通过解构方式来调用属性
// 其中:
//     z 参数有默认值, 有默认值的参数, 必须是可选参数!!!  所以, z也是可选参数
//     h? 是可选参数 (注意: 可选参数必须跟在必须参数后面)
console.log('create_func5: ', create_func5({x:1, y:2}))         // 输出 1+2+10=13
console.log('create_func5: ', create_func5({x:1, y:2, h:4}))    // 输出 1+2+10+4=17

// 下述代码与和上述代码 (create_func5) 是等效的, 区别是下述代码是:
// 通过属性调用的方式, 来访问属性的值, 其中, z 的默认值设置方式为: fn.z = fn.z !== undefined ? fn.z : 10;
function create_func5_copy (fn:create_func5_args):string { fn.z = fn.z !== undefined ? fn.z : 10; if (fn.z&&fn.h) {return (fn.x+fn.y+fn.z+fn.h).toString()} else {return (fn.x+fn.y+fn.z).toString()} } 
console.log('create_func5_copy: ', create_func5_copy({x:1, y:2}))         // 输出 1+2+10=13
console.log('create_func5_copy: ', create_func5_copy({x:1, y:2, h:4}))    // 输出 1+2+10+4=17


function create_func6 (x:string, ...args:number[]):string { return x + args.join(",") }
// ...参数名称是可变长度参数
console.log('create_func6: ', create_func6('hello: ', 1, 2))    // 输出 hello: 1,2
console.log('create_func6: ', create_func6('hello: ', 2, 3, 4)) // 输出 hello: 1,2,3,4


// 函数重载签名 -------------------------------------------------------
// 用途如下:
// 1.通过重载签名，你可以明确函数支持的多种不同调用方式。这有助于让使用者（包括你自己和其他开发者）清楚地知道函数可以接受哪些类型的参数以及返回什么类型的结果。
// 2.重载签名使代码更具可读性和可维护性，因为它清楚地列出了函数的各种可能调用方式，而无需查看函数实现细节。
// 重载签名 (重载签名是指函数的不同调用方式。)
function create_func3_2 (x:number, y:number):number                     // create_func3_2 函数只能通过这两种方式传参调用, 其他方式都会报错(1/2)
function create_func3_2 (x:string, y:string):{name:string, age:number}  // create_func3_2 函数只能通过这两种方式传参调用, 其他方式都会报错(2/2)

// 实现签名 (实现签名是指实际实现函数逻辑的签名)
// 注意: 重载签名的最后一个签名一定要包含上述所有重载过的签名
function create_func3_2 (x:any,y:any):any {
    if (typeof x == 'number') {return x+y}
    else if (typeof x == 'string') {return `hello ${x} ${y}`}
    else {}
}
console.log('create_func3_2: ', create_func3_2(1,2))                // 输出: 3
console.log('create_func3_2: ', create_func3_2('zhangsan', 'lisi')) // 输出:  hello zhangsan lisi



// 箭头函数-------------------------------------------------------
let create_func3_copy_1: (x:number, y:number) => string = function(x,y) {return (x+y).toString()}
// 该函数接收 number 类型的参数x,y, 然后然后一个 string 类型的值
console.log('create_func3_copy_1: ', create_func3_copy_1(1, 2))
// 上述 create_func3_copy 函数实现与 create_func3 函数完全一致, 只是写法不同
// 语法解释:
//     let create_func3_copy:                   声明了一个名为 create_func3_copy 的变量。
//     (x:number, y:number) =>                  string 是一个函数类型注解。这意味着 create_func3_copy 是一个接受两个 number 类型的参数并返回一个 string 类型的结果的函数。
//         x: number                            表示第一个参数是一个 number 类型。
//         y: number                            表示第二个参数是一个 number 类型。
//     => string                                表示该函数返回一个 string 类型的值。
//     function(x,y) {return (x+y).toString()}  是一个函数表达式, 其中:
//         function(x, y)                       是一个匿名函数，接受两个参数 x 和 y。
//         {return (x+y).toString()}            是函数体，表示函数将返回 x 和 y 的和。


let create_func3_copy_2: (x:number, y:number) => string = (x,y) => {return (x+y).toString()}   
// 这段代码与上述代码是等效的, 区别是使用 => 来替代了 function 关键字
// 语法解释:
// let create_func3_copy_2: (x: number, y: number) => string
//     这段代码用于声明变量并指定接收参数类型和返回值的类型, 其中:
//     let create_func3_copy_2: 使用 let 关键字声明了一个名为 create_func3_copy_2 的变量。
//     (x: number, y: number) => string 这部分是类型注解，表示 create_func3_copy_2 是一个接受两个 number 类型参数并返回 string 类型值的函数。

// (x, y) => { return (x + y).toString(); }
//     这段代码是箭头函数的实现, 其中:
//     (x, y) 是箭头函数的参数列表，表示函数接受两个参数 x 和 y。
//     => 是箭头函数的符号，用于定义函数。
//     { return (x + y).toString(); } 是函数体：

let create_func3_copy_3 = (x:number, y:number) => {return (x+y).toString()}
// 这段代码与上述代码是等效的, 区别是这行代码对返回结果使用了类型推断, 并非上述代码的通过类型注解来指定箭头函数的返回类型。
// 语法解释:
// let create_func3_copy_2 = (x: number, y: number) =>
//     这段代码用于声明变量并指定接收参数类型:
//
// {return (x+y).toString()}
//     这段代码是箭头函数的实现, 其实现内容是一个函数体




// 通过解构, 来传递类型约束-------------------------------------------------------
// 示例一
type dict1 = { a: 1, b: 2 }                  // 使用 type 关键字定义一个类型对象, 该对象中的元素 a 只允许传入 1, b 只允许传入 2
function func1({ a, b }: dict1): number {     // 将类型的约束, 通过解构的方式传递给 {a, b}, 此时, 函数的参数 a 只能接收 1, b 只能接收 2
    return a + b
}
console.log('02_函数|条件判断|逻辑 | ', 'func1:', func1({ a: 1, b: 2 })) // 输出: 3 (如果a和b传入其他数值, 则报错)

// 示例二
type dict2 = { a: number, b: number }         // 使用 type 关键字定义一个类型对象, 该对象中的元素 a 只允许传入 number 数值, b 只允许传入 number 数值
function func2({ a, b }: dict2): number {     // 将类型的约束, 通过解构的方式传递给 {a, b}, 此时, 函数的参数 a 只能接收 number 数值, b 只能接收 number 数值
    return a + b
}
console.log('02_函数|条件判断|逻辑 | ', 'func2:', func2({ a: 100, b: 200 })) // 输出: 300

// 示例三
function func3({ a, b } = { a:'', b:'' }): string {     // 将类型的约束, 通过解构的方式传递给 {a, b}, 此时, 函数的参数 a 只能接收 "任意字符串", b 只能接收 "任意字符串"
    return a + b
}
console.log('02_函数|条件判断|逻辑 | ', 'func3:', func3({ a: 'hello', b: 'world' })) // 输出: helloworld

// 示例四
function func4({ a, b } = { a:1, b:1 }): number {     // 将类型的约束, 通过解构的方式传递给 {a, b}, 此时, 函数的参数 a 只能接收 "任意数值", b 只能接收 "任意数值"
    return a + b
}
console.log('02_函数|条件判断|逻辑 | ', 'func4:', func4({ a: 11, b: 22 })) // 输出: 33



// this -------------------------------------------------------
// this 是对象本身, 与py中的self类型, 如下述代码, this 就是 dict_obj 对象本身
let dict_obj = {
    x: 1,
    y: 2,
    z: function() {return this.x + this.y}
}
console.log('dict_obj.z: ', dict_obj.x, dict_obj.z()) // 输出: dict_obj.z:  1 3



// 逻辑操作 -------------------------------------------------------
// && 相当于python的 and 如, if (a && b) 等效于py的 if a and b