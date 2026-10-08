import Link from 'next/link';
import { products } from '@/data/products';
import { ProductVisual } from '@/components/ProductVisual';
import styles from './page.module.css';

export default async function AccountPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const params = await searchParams;
  const tab = params.tab || 'overview';
  const myProducts = [products[0], products[4]];

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
            <Link href="/account?tab=overview" className={`${styles.navLink} ${tab === 'overview' ? styles.active : ''}`}>Overview</Link>
            <Link href="/account?tab=orders" className={`${styles.navLink} ${tab === 'orders' ? styles.active : ''}`}>Orders</Link>
            <Link href="/account?tab=downloads" className={`${styles.navLink} ${tab === 'downloads' ? styles.active : ''}`}>Downloads & Licenses</Link>
            <Link href="/account?tab=wishlist" className={`${styles.navLink} ${tab === 'wishlist' ? styles.active : ''}`}>Wishlist</Link>
            <Link href="/account?tab=settings" className={`${styles.navLink} ${tab === 'settings' ? styles.active : ''}`}>Settings</Link>
            <button className={styles.logoutBtn}>Log out</button>
          </nav>
        </aside>

        <main className={styles.main}>
          {tab === 'overview' && (
            <div className={styles.overview}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Total Orders</div>
                  <div className={styles.statValue}>12</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Active Licenses</div>
                  <div className={styles.statValue}>5</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Wishlist Items</div>
                  <div className={styles.statValue}>3</div>
                </div>
              </div>

              <h2 className="h3 mb-6 mt-12">Recent Purchases</h2>
              <div className={styles.purchaseList}>
                {myProducts.map(p => (
                  <div key={p.id} className={styles.purchaseCard}>
                    <div className={styles.purchaseVisual}>
                      <ProductVisual name={p.name} category={p.categoryId} imageUrl={p.imageUrl} />
                    </div>
                    <div className={styles.purchaseInfo}>
                      <h4 className={styles.purchaseName}>{p.name}</h4>
                      <p className={styles.purchaseMeta}>Purchased on Oct 12, 2025</p>
                    </div>
                    <div className={styles.purchaseActions}>
                      <Link href={`/account?tab=downloads`} className="btn btn-secondary">View License</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'downloads' && (
            <div className={styles.downloads}>
              <h2 className="h3 mb-6">Your Products</h2>
              <div className={styles.downloadGrid}>
                {myProducts.map(p => (
                  <div key={p.id} className={styles.downloadCard}>
                    <div className={styles.downloadHeader}>
                      <div className={styles.downloadVisual}>
                        <ProductVisual name={p.name} category={p.categoryId} imageUrl={p.imageUrl} />
                      </div>
                      <div className={styles.downloadInfo}>
                        <h4>{p.name}</h4>
                        <span className="badge badge-accent">Active</span>
                      </div>
                    </div>
                    <div className={styles.licenseBox}>
                      <div className={styles.licenseLabel}>License Key</div>
                      <div className={styles.licenseKey}>
                        <code>XXXX-XXXX-XXXX-XXXX</code>
                        <button className={styles.copyBtn}>Copy</button>
                      </div>
                    </div>
                    <div className={styles.downloadActions}>
                      <button className="btn btn-primary" style={{ width: '100%' }}>Download (v2.4.1)</button>
                      <button className="btn btn-outline" style={{ width: '100%', marginTop: '8px' }}>Instructions</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {(tab === 'orders' || tab === 'wishlist' || tab === 'settings') && (
            <div className={styles.emptyState}>
              <p className="text-muted">This section is currently being updated. Please check back later.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
