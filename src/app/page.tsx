import { MainNav } from '@/components/MainNav';
import { TransposeNote } from '@/components/TransposeNote/TransposeNote';

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TransposeNote />
    </main>
  );
}
