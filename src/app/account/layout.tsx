import Link from 'next/link';
import styles from './layout.module.css';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.accountPage}>
      <div className={styles.header}>
        <div className="container">
          <h1 className="h1">My Account</h1>
          <p className="text-lg text-muted mt-2">Welcome back, Siddharth.</p>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            <Link href="/account" className={styles.navLink}>Overview</Link>
            <Link href="/account/orders" className={styles.navLink}>Orders</Link>
            <Link href="/account/downloads" className={styles.navLink}>Downloads & Licenses</Link>
            <Link href="/account/wishlist" className={styles.navLink}>Wishlist</Link>
            <Link href="/account/settings" className={styles.navLink}>Settings</Link>
            <button className={styles.logoutBtn}>Log out</button>
          </nav>
        </aside>

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}
