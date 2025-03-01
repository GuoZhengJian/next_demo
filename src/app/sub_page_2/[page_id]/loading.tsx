import { Skeleton } from 'antd'

export default () => {
  return <Skeleton paragraph={{ rows: 6 }} style={{ padding: 56 }} />;
};


// 代码解释
// =========================================================================================
// import { Skeleton } from 'antd';
// 解释
//  'antd'
//     antd 是 Ant Design 的简称, Ant Design 是由阿里巴巴团队开发并维护的一套企业级 React UI 组件库。
//     它提供了一整套基于 React 的 UI 组件，可以帮助开发者快速构建美观、响应式、功能齐全的 Web 应用。

//   安装 Ant Design
//     npm install antd

//   引入组件
//     import { Skeleton } from 'antd'

//   使用组件
//     <Skeleton paragraph={{ rows: 6 }} style={{ padding: 56 }} />

//   使用 CSS 样式
//     Ant Design 提供了完整的样式解决方案，可以选择直接引入 CSS 文件进行自定义主题：
//     import 'antd/dist/antd.css'; // 引入 Ant Design 的 CSS 文件



// =========================================================================================
// <Skeleton paragraph={{ rows: 6 }} style={{ padding: 56 }} />;
// 解释
//   <Skeleton ... /> 组件
//     Skeleton 是一个组件，通常用于显示占位符内容，模拟文本或其他内容的外观，直到实际数据加载完成。例如，它可以用于显示文章加载前的占位符。

//   paragraph={{ rows: 6 }} 属性
//     paragraph 是一个属性，表示组件将生成段落样式的占位符内容。
//     {{ rows: 6 }} 是一个对象，表示段落包含 6 行文本。这意味着 Skeleton 组件将显示 6 行占位符文本，模拟段落的外观。

//   style={{ padding: 56 }} 属性
//     style 是一个内联样式属性，用于定义组件的 CSS 样式。
//     {{ padding: 56 }} 是一个对象，表示组件周围有 56 像素的内边距。这可以使占位符内容与其他元素保持适当的间距。