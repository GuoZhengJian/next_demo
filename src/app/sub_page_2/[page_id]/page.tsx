export default async function Page({ params }: { params: Promise<{ page_id: string }> }) {
  const page_id = (await params).page_id;
  return (
      <div>
          {/* link是标签页图标 */}
          <link rel="icon" href="/image/Minecraft.ico" type="image/png" sizes="32x32" />

          <p>第 {page_id} 页</p>

          <img src="/image/Minecraft5.png" alt="Minecraft Icon" width="100" height="100" />
      </div>
  );
}




  // 代码解释:
  // export default async function Page()
  //   声明一个默认导出的异步函数，函数名为 Page。

  // {params,}: {params: Promise<{ page_id: string }>}
  //   函数参数：函数 Page 接收一个对象，该对象包含 params 属性。
  //   类型检查：TypeScript 会确保 params 是一个 Promise 对象，且该 Promise 解析为一个包含 page_id 属性的对象, 该对象的类型是string。
  
  // const page_id = (await params).page_id
  //   异步操作：由于 params 是一个 Promise 对象，函数需要使用 await 来获取 params 解析后的值。

  // 访问
  //   http://10.8.0.2:3000/sub_page_2/3
  // 返回:
  //   第 3 页

  // 另外:
  //   图片 /root/mycode/next_demo/public/image/Minecraft.ico 的访问路由是 http://10.8.0.2:3000/image/Minecraft.ico, 其中, public就相当于是 app 的根目录