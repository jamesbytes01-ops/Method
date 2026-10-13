'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Header.module.css';
import { categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export function Header() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const mobileRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
        setSearchQuery('');
        setMobileOpen(false);
      }
    },
    [searchQuery, router]
  );

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch(e as unknown as React.FormEvent);
      }
    },
    [handleSearch]
  );

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <div className={styles.left}>
            <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
              Method<span className={styles.dot}>.</span>
            </Link>

            <nav className={styles.desktopNav}>
              {/* Categories Dropdown */}
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
              <Link href="/software" className={styles.navLink}>Software</Link>
              <Link href="/security" className={styles.navLink}>Security</Link>
              <Link href="/ebooks" className={styles.navLink}>E-books</Link>
              <Link href="/deals" className={styles.navLinkAccent}>Deals 🔥</Link>
            </nav>
          </div>

          <div className={styles.right}>
            <form className={styles.searchWrapper} onSubmit={handleSearch}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search marketplace..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
            </form>

            <div className={styles.actions}>
              <Link href="/account" className={styles.iconBtn} aria-label="Account">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
              <Link href="/account?tab=wishlist" className={styles.iconBtn} aria-label="Wishlist">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </Link>
              <Link href="/cart" className={styles.cartBtn} aria-label="Cart">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className={styles.cartCount}>{totalItems}</span>
              </Link>
            </div>

            <button
              className={styles.mobileMenuBtn}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen(o => !o)}
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className={styles.mobileOverlay} ref={mobileRef}>
          <form className={styles.mobileSearch} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search marketplace..."
              className={styles.mobileSearchInput}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className={styles.mobileSearchBtn}>Search</button>
          </form>

          <nav className={styles.mobileNav}>
            <Link href="/software" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              💻 Software
            </Link>
            <Link href="/security" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              🛡️ Security
            </Link>
            <Link href="/ebooks" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              📚 E-books
            </Link>
            <Link href="/deals" className={`${styles.mobileNavLink} ${styles.mobileNavLinkAccent}`} onClick={() => setMobileOpen(false)}>
              🔥 Deals
            </Link>
            <div className={styles.mobileDivider} />
            <Link href="/shop" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>All Products</Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/support" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Support</Link>
          </nav>

          <div className={styles.mobileActions}>
            <Link href="/account" className="btn btn-secondary" onClick={() => setMobileOpen(false)}>My Account</Link>
            <Link href="/cart" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
              Cart ({totalItems})
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
