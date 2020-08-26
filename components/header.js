import { Layout } from 'antd';
import styles from "./Header.module.css"

export default function Header() {
    return (
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <h1 className={styles.title}>Puppr!</h1>
        </Layout.Header>
    )
  }
  