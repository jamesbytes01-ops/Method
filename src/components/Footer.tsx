import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              Method<span className={styles.dot}>.</span>
            </Link>
            <p className={styles.description}>
              The premium marketplace for digital products, software, and tools built for modern teams and creators.
            </p>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Marketplace</h4>
            <ul className={styles.list}>
              <li><Link href="/software">Software</Link></li>
              <li><Link href="/shop?category=dev-tools">Developer Tools</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/ebooks">E-books</Link></li>
              <li><Link href="/deals" className={styles.accentLink}>🔥 Deals</Link></li>
            </ul>
          </div>

          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.list}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Customer</h4>
            <ul className={styles.list}>
              <li><Link href="/account">My Account</Link></li>
              <li><Link href="/account/orders">Orders</Link></li>
              <li><Link href="/account/downloads">Downloads</Link></li>
              <li><Link href="/account/wishlist">Wishlist</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.list}>
              <li><Link href="/legal/privacy">Privacy</Link></li>
              <li><Link href="/legal/terms">Terms</Link></li>
              <li><Link href="/legal/refunds">Refund Policy</Link></li>
              <li><Link href="/legal/licenses">License Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; 2026 Method Digital. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
