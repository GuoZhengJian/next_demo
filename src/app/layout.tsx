import React from 'react';
import styles from './styles.module.css'
import App from '.././test_js'


// 组件化开发
// 注意: React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。
function TT1() {
  return (
    <h1>hello world layout_TT1</h1>
  )
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.bg_1}>
          {/* <TT1/> */}
          {children}
          {/* <App /> */}
        </main>
      </body>
    </html>
  );
}
