import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Layout } from "antd";
import styles from "./PageLayout.module.css";

export default function PageLayout({ children, onTabChanged }) {
  return (
    <Layout>
      <Header onTabChanged={onTabChanged} />
      <div className={styles.box}></div>
      <Layout.Content className={styles.siteLayout}>
        <div
          className={styles.siteContent}
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}
