import styles from './styles.module.css'

export default function SubPage({
    children, // 将是一个页面或嵌套布局
  }: {
    children: React.ReactNode
  }) {
    return (
      // <section style={{ backgroundColor: '#fff000' }}>{children}</section>
      <section className={styles.sub_page__h2}>{children}</section>
    )
  } 