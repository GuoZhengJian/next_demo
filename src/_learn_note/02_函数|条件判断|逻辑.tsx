import { AndroidFilled } from "@ant-design/icons"
import { count } from "console"
import { StyledString } from "next/dist/build/swc/types"
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants"
import { headers } from "next/headers"

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
// this 是对象本身, 与py中的self类似, 如下述代码, this 就是 dict_obj 对象本身
let dict_obj = {
    x: 1,
    y: 2,
    z: function() {return this.x + this.y}
}
console.log('dict_obj.z: ', dict_obj.x, dict_obj.z()) // 输出: dict_obj.z:  1 3



// 逻辑操作 -------------------------------------------------------
// && 相当于python的 and 如, if (a && b) 等效于py的 if a and b




// 类
// ==============================================================================================
class my_class {
    // ts 中必须要声明对象的类型, 但是 js 和 py 中不需要该行代码, 因为 js 和 py 是动态类型语言
    name: string

    // constructor 相当于python 的 __init__, 都是类的初始化函数
    constructor(user_name: string) {
        this.name = user_name
    }

    hello() {
        return `hello ${this.name}`
    }
}
console.log('my_class: ', new my_class('zhangsan'))             // 输出: { name: 'zhangsan' }
console.log('my_class: ', new my_class('zhangsan').name)        // 输出: zhangsan
console.log('my_class: ', new my_class('zhangsan').hello())     // 输出: hello zhangsan

// 上述代码等效于下述py代码
// class my_class:
//     def __init__(self, user_name):
//         self.name = user_name
//
//     def hello(self):
//         return "Hello, " + self.name
//
// print(my_class("zhangsan"))         # <__main__.my_class object at 0x7f16efab7fa0>
// print(my_class("zhangsan").name)    # zhangsan
// print(my_class("zhangsan").hello()) # Hello, zhangsan



// 类的继承 -------------------------------------------------------
class A {
    user_name: string
    user_age: number

    constructor(name: string='normal_name', age:number=0) {
        this.user_name = name
        this.user_age = age
    }

    func_a() {
        return `name: ${this.user_name}, age: ${this.user_age}`
    }
}


// 该类主要用于演示 "类的继承", "访问修饰符"
class B extends A {
    // 在TypeScript里, 类的成员都默认为 public, 但是如果你将类的成员使用 private 标记为私有成员后, 那么该成员无法在当前类的外部被访问
    // public, private, protected, readonly 是一种访问修饰符, 用于指定类的成员 (如类的属性或方法) 的访问的方式
    // 例如:
    // public  user_sex: string     // 公共成员, 等效于 user_sex: string
    // private user_sex: string     // 私有成员, 无法在类的外部被访问 (包括子类以及所有外部访问)
    // protected user_sex: string      // 受保护成员, 只能在类本身及其子类中被访问
    readonly user_sex: string      // 只读成员, 只读成员必须在声明时或构造函数里被初始化。
    

    // js 中, 构造函数中的参数不会自动成为类的成员变量。这些参数只在构造函数的作用域内有效，构造函数执行完毕后，这些参数就会被销毁。
    // 如果你希望构造函数参数自动成为类的成员变量，可以使用 public、private 或 protected 访问修饰符, 
    constructor(sex: string, readonly height:string='175cm') {
        // super() 用于调用父类的构造函数, 使用方法与 py 的 super().__init__() 一模一样
        // 注意: 与 python 一样, 如果仅继承部分属性的话, 那么该属性在父类或子类之间必需要有一个默认值, 否则会报错: 缺少传入的参数
        super()     // 使用 "子类" 的构造函数来初始化 "父类" 的构造函数
        this.user_sex = sex
    }
    func_b() {
        return `name: ${this.user_name}, age: ${this.user_age}, sex: ${this.user_sex}`
    }
}
console.log('class_B1: ', new B('women').func_b()) // class_B:  name: normal_name, age: 0, sex: women
console.log('class_B2: ', new B('women').height)   // class_B:  175cm


// 该类主要用于演示 "子类对父类的访问"
class C extends B {
    constructor(sex: string) {
        super(sex)      // 使用 "子类" 的构造函数来初始化 "父类" 的构造函数
        // this.user_sex = sex     // 使用 private   修饰符时, 这行会报错, 因为 this.user_sex 在父类中是私有成员
        // this.user_sex = sex     // 使用 protected 修饰符时, 这行可以正常运行, 因为 protected 成员在派生类中仍然可以访问
        console.log(this.user_sex) // 使用 readonly  修饰符时, 该属性是只读的, 无法重新赋值
        console.log(this.height)   // 在构造函数的参数中使用访问修饰符后, 该参数会自动变成其属性, 并拥有对应修饰符的访问权限

    }
}




// 特性 -------------------------------------------------------
// js中的特性与 py 一样, 其中: 
//     get 相当于是 python 的 @property,
//     set 相当于是 python 的 @被装饰为特性的函数名称.setter (比如当前示例中的 @name.setter, 其中 @name 是需要指定为属性的函数名称, 这里是 name 函数)
class D {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // getter 用于获取 name 属性的值
    get name(): string {
        return this._name;
    }

    // setter 用于设置 name 属性的值
    set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Name 的不允许为空.");
        }
    }
}

// 示例代码
const person = new D("张三");
console.log(person.name); // 输出: 张三

person.name = "李四";  // 使用 setter 设置 name 属性的值
console.log(person.name); // 输出: 李四

person.name = "";  // 尝试设置空值
// 输出: Name 的不允许为空.



// 静态方法 -------------------------------------------------------
class E {
    // 定义一个静态方法
    static func(name: string) {
        return `hello ${name}`
    }
}
console.log(E.func('zhangsan')) // 输出: hello zhangsan





// 抽象类,抽象方法 -------------------------------------------------------
// 抽象类是使用 abstract 关键字声明的类。抽象类是不能被实例化的类，只能作为其他类的基类。 
// 抽象方法是使用 abstract 关键字声明的方法。它们是没有实现的方法，必须在派生类中实现。
//
// 抽象类可以包含普通方法，这些方法可以在抽象类中实现。
// 抽象方法只能在抽象类中声明。
//
// 抽象类和抽象方法的用途
// 1.定义接口和约定：
//     抽象类可以作为一种接口，定义子类必须实现的方法。这确保了所有派生类都遵循相同的约定和行为。
// 2.提供通用实现：
//     抽象类可以包含一些通用方法的实现，而抽象方法则需要在派生类中实现。这允许开发者在抽象类中定义通用逻辑，同时在派生类中实现具体的行为。
// 3.组织和简化代码：
//     抽象类帮助开发者组织和简化代码，通过将公共逻辑放在抽象类中，减少重复代码，使代码更易于维护和扩展。

// 示例
// 定义抽象类 Animal
abstract class F {
    // 抽象方法，没有实现，需要在派生类中实现
    abstract hello(name:string): string

    // 普通方法，可以有实现
    func(): string {
        return 'hello world'
    }
}

class G extends F {
    // 实现抽象方法
    hello(name:string): string {
        return `hello ${name}`
    }
}
console.log(new G().hello('zhangsan')) // 输出: hello zhangsan
console.log(new G().func()) // 输出: hello world





// 把类当做接口使用 -------------------------------------------------------
// 接口类似于抽象类, 都是用于定义对象的结构和行为规范, 区别是:
//     1.接口 (Interface) 不包含任何实现，而抽象类 (abstract) 可以包含具体方法的实现。
//     2.类可以实现多个接口，但只能继承一个抽象类。
//
// 使用方法:
// 1.接口定义了一组方法和属性的规范，可以用于类型检查和类型约束。
//     使用接口作为函数参数的类型约束，能够确保传入的对象符合接口的结构。虽然语法上看起来像是类型约束，但实际上是通过接口定义了这种约束。
// 2.类也是一个接口
//      因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
//
// 创建一个接口
interface J1 {
    x: number
    y: number
    hello(name:string):string
    }

// 其他常用的接口属性声明方式
// 接口内属性无法指定默认值
interface J1_other {
    readonly a?:number      // 可以使用 ? 声明可选属性, 可以使用 readonly 声明只读属性
    b?:Date                 // 一个 Date 类型的属性
    [index:number]:string   // 这种写法叫做索引签名（Index Signature），用于定义对象的键和值的类型。它表示对象可以用特定类型的键来索引，并且每个键对应的值必须是特定类型。
                            // 语法解释:
                            //     index：这是一个占位符，可以是任何合法的标识符，表示索引的名称。通常，你会看到使用 index、key 或其他描述性的名称。但实际上，这个名称并不重要，关键是它的类型和用法。
                            //     number：这是索引的类型。在这个例子中，表示使用数字类型作为键。也可以使用 string 作为索引类型，表示使用字符串类型作为键。
                            //     string：这是值的类型。在这个例子中，表示索引对应的值必须是字符串类型。
    

    // 下述内容是不常用的声明方式
    // new (arge1:number, arge2:number): any   // 用于描述类的构造函数结构和行为规范的签名 (不常用, 详细信息可以在下面的笔记查看关于这行代码的示例 )
    // (start: number): string  // 用于描述 "函数的参数" 以及 "参数的类型" 的结构和行为规范的签名 (不常用, 无示例)
                                // 语法解释:
                                //     start：这是函数的参数名，可以是任何合法的标识符。在这个例子中，start 是一个 number 类型的参数。
                                //     number：这是参数 start 的类型，表示函数接收一个数字类型的参数。
                                //     (): string：整个签名用 () 括起来表示这是一个函数类型的定义。函数接收一个 number 类型的参数 start，并返回一个 string 类型的值。
                                //     这种写法的意义在于定义一个函数类型接口，用于约束函数的参数和返回值类型。在 TypeScript 中，函数类型接口非常有用，可以为函数的使用提供类型安全的约束
                                // 调用示例:
                                //     const getCounter: J1_other = function (start: number): string {return `hello ${start}`}
    }
const j1_other: J1_other = {a:1, 0:'zhangsan', 1:'lisi', 9:'wangwu', b:new Date()}
console.log( '---------+++',
    j1_other,       // { '0': 'zhangsan', '1': 'lisi', '9': 'wangwu', a: 1 } 
    j1_other.a,     // 1 
    j1_other[1],    // zhangsan 
    j1_other[0],    // lisi 
    j1_other[2],    // undefined 没有找到会返回这
    j1_other[9],    // wangwu
    j1_other.b,     // 当前系统的时间 2025-03-07T09:12:40.158Z
)


// 接口可以继承接口
interface J2 extends J1 {
    z: number
    }

// 把接口用作类型约束
const j_var: J2 = {x:1, y:2, z:3, hello(name:string):string{return `hello ${name}`}}
console.log(
    j_var,                  // 输出: { x: 1, y: 2, z: 3, hello: [Function: hello] }
    j_var.x,                // 输出: 1
    j_var.y,                // 输出: 2
    j_var.z,                // 输出: 3
    j_var.hello('world'),   // 输出: hello world
    )

// 在类中实现 (implements) 接口的规范
class J3_class implements J2 {

    constructor (public x:number, public y:number, public z:number, public g:number) {
        this.x = x  // J2 接口要求的必需存在的属性
        this.y = y  // J2 接口要求的必需存在的属性
        this.z = z  // J2 接口要求的必需存在的属性
        this.g = g  // 当前类自己的属性 
    }

    // J2 接口要求的必需存在的方法
    hello(name:string):string {return `hello ${name}`}
}

// 类可以当作接口, 接口可以用作类型约束, 所以可以把类做为参数的约束类型使用
// 此时, 函数的参数 class_obj 就必需是一个包含函数 x,y,z,g,hello() 的类对象, 否则, 就会报错缺少 *** 个属性
function J3_func (class_obj: J3_class): void {
    console.log(
        class_obj.x,
        class_obj.y,
        class_obj.z,
        class_obj.g,
        class_obj.hello('world')
    )
}
console.log(J3_func(new J3_class(1,2,3,4))) // 输出: 1 2 3 4 hello world


// 可以把类做为接口, 用于继承到其他接口
interface J4 extends J3_class {
    h: number
}


// 把接口用作类型约束
const j4_var: J4 = {x:1, y:2, z:3, hello(name:string):string{return `hello ${name}`}, h:4, g:5}
console.log(
    j4_var,                  // 输出: { x: 1, y: 2, z: 3, hello: [Function: hello], h: 4, g: 5 }
    j4_var.x,                // 输出: 1
    j4_var.y,                // 输出: 2
    j4_var.z,                // 输出: 3    
    j4_var.hello('world'),   // 输出: hello world
    j4_var.h,                // 输出: 4
    j4_var.g,                // 输出: 5
    )



// 具有构造签名的接口 -------------------------------------------------------
// 在 TypeScript 中，具有构造签名的接口用于描述类的构造函数。
// 
// 这种写法的主要意义在于你可以使用这种接口来限制哪些类可以被传递给函数或其他上下文，从而确保这些类具有特定的构造函数签名。
//
// 使用场景
//     限制类的构造函数：确保传递给某个函数的类具有特定的构造函数签名。
//     工厂函数：用于编写工厂函数，可以根据传入的构造函数参数创建实例。
//     依赖注入：可以用于依赖注入，确保注入的类具有符合要求的构造函数。
// 示例
interface _A {
    new (name1: string, name2: string):any
}

function _B (class_obj: _A) {
    let c_obj = new class_obj('zhangsan', 'lisi') // 这行代码相当于是初始化类对象, 如 input_class_1
    console.log('hello', c_obj.name1, c_obj.name2)
}

class input_class_1 {constructor(public name1: string, public name2: string) {this.name1=name1, this.name2=name2}}
class input_class_2 {constructor(public name1: string) {this.name1=name1}}
class input_class_3 {constructor(public x: number) {this.x=x}}

_B(input_class_1)       // 类 input_class_1 的构造函数格式符合要求, 可以正常运行
_B(input_class_2)       // 类 input_class_2 的构造函数格式符合要求, 可以正常运行
// _C(input_class_3)    // 类 input_class_3 的构造函数不符合格式要求, 无法正常运行 !!!
