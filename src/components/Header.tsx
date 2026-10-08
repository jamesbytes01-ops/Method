import Link from 'next/link';
import styles from './Header.module.css';
import { categories } from '@/data/products';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            Method<span className={styles.dot}>.</span>
          </Link>
          
          <nav className={styles.desktopNav}>
            <div className={styles.navItem}>
              <Link href="/shop" className={styles.navLink}>Categories</Link>
              <div className={styles.dropdown}>
                {categories.map((c) => (
                  <Link key={c.id} href={`/shop?category=${c.id}`} className={styles.dropdownItem}>
                    <span className={styles.icon}>{c.icon}</span>
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/shop?category=software" className={styles.navLink}>Software</Link>
            <Link href="/shop?category=security" className={styles.navLink}>Security</Link>
            <Link href="/shop?category=e-books" className={styles.navLink}>E-books</Link>
            <Link href="/shop?deals=true" className={styles.navLinkAccent}>Deals</Link>
          </nav>
        </div>

        <div className={styles.right}>
          <div className={styles.searchWrapper}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search marketplace..." className={styles.searchInput} />
          </div>

          <div className={styles.actions}>
            <Link href="/account" className={styles.iconBtn} aria-label="Account">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
            <Link href="/account?tab=wishlist" className={styles.iconBtn} aria-label="Wishlist">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </Link>
            <Link href="/cart" className={styles.cartBtn} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className={styles.cartCount}>0</span>
            </Link>
          </div>
          
          <button className={styles.mobileMenuBtn} aria-label="Menu">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
             </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
