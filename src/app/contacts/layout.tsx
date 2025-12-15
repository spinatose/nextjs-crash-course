"use client";

import MenuLink from "../components/menu-link";
import styles from "./layout.module.css";
export default function ContactsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.ContactsLayout}>
          <aside className={styles.Sidebar}>
            <h4 className={styles.Subtitle}>Links</h4>
            <nav className={styles.Menu}>
              <ul>
                <li>
                  <MenuLink href="/contacts/birthdays">🎂 Birthdays</MenuLink>
                </li>
              </ul>
            </nav>
          </aside>
    
          {children}
        </div>
      );
}