import "./globals.css";
import styles from './layout.module.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.Layout}>{children}</div>
      </body>
    </html>
  );
}
