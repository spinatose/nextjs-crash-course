"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import MenuLink from "./menu-link";

export default function Header() {
  
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={60}
          height={60}
          className={styles.logo}
        />
      </Link>
      <h1 className={styles.title}>Welcome!</h1>
      <nav className={styles.nav}>
        <MenuLink href="/about">
          About
        </MenuLink>
        <MenuLink href="/contacts">
          Contacts
        </MenuLink>
      </nav>
    </header>
  );
}

