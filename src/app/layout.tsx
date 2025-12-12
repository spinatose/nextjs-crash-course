import "./globals.css";
import styles from './layout.module.css';
import Header from './components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={styles.Layout}>{children}</div>
      </body>
    </html>
  );
}
