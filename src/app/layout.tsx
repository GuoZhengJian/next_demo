import React from 'react';
import styles from './styles.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.bg_1}>
          {children}
        </main>
      </body>
    </html>
  );
}
