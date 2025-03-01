
// import styles from './styles.module.css'
// import { Suspense } from 'react'
// import Loading from './loading'

// export default function sub_page_2({children}:{children:React.ReactNode}) {
//     return (
//         <Suspense fallback={<Loading />}>
//             <div className={styles.bg_1}>
//                 <h1 className={styles.bg_2}>{children}</h1>
//             </div>
//         </Suspense>
//     )
// }



// 显示 loading UI 在页面加载的时候, 显示一个骨架屏幕
// 注意:
//     loading UI 是在客户端加载的, 在服务器端添加 loading UI 是没有意义的，因为服务器端的加载逻辑和客户端的加载逻辑是有所不同的
//     加载 UI（例如骨架屏）主要用于客户端，以改善用户体验。这是因为在客户端加载数据期间，显示一个骨架屏可以让用户感觉页面正在加载，而不是空白或卡顿。

// 加载 loading UI 示例代码:
"use client"; // Add this directive at the top of your file

import styles from './styles.module.css';
import { Suspense, useState, useEffect } from 'react';
import Loading from './loading';

export default function SubPage2({children}: {children: React.ReactNode}) {
    // 手动添加一个延迟, 用于正确的显示骨架屏
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 2000); // 延迟时间（以毫秒为单位），此处设置为1秒
        return () => clearTimeout(timer);
    }, []);

    return (
        <Suspense fallback={<Loading />}>
        <div className={styles.bg_1}>
            {/* 三元运算符 */}
            {isLoading ? <Loading /> : <h1 className={styles.bg_2}>{children}</h1>}
        </div>
        </Suspense>
    );
    }

    // 上述代码使用了三元运算符, 如果不使用仅添加延迟, 为什么不能正常显示loading ui
    // 但是生产环境中, 我是不可能手动添加延迟的, 这种情况下, 我无法使用三元运算符来在页面响应前加载loading UI

