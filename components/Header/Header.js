import { Button, Layout, Menu } from "antd";
import styles from "./Header.module.css";

export default function Header({ onTabChanged }) {
  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <h1 className={styles.title}>Puppr!</h1>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["view"]}
        onClick={onTabChanged}
      >
        <Menu.Item key="view">View Pets</Menu.Item>
        <Menu.Item key="add">Add Pet</Menu.Item>
      </Menu>
    </Layout.Header>
  );
}
