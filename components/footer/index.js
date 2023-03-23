import React from 'react';
import styles from './styles.module.css';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/rauf-rzayev-b12827219/" target="_blank">
        Rauf Rzayev
      </Link>
    </footer>
  )
}