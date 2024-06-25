/* eslint-disable react/prop-types */
import { Layout } from 'antd';
import styles from './index.module.scss';

export default function LayoutPage({ children }) {
  return (
    <Layout className={styles.container}><div className={styles.main}>{children}</div></Layout>
  )
}
