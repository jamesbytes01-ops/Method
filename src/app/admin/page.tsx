import Link from 'next/link';
import styles from './page.module.css';

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const params = await searchParams;
  const tab = params.tab || 'dashboard';

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          Method<span className={styles.dot}>.</span> Admin
        </div>
        <nav className={styles.nav}>
          <Link href="/admin?tab=dashboard" className={`${styles.navLink} ${tab === 'dashboard' ? styles.active : ''}`}>
            Dashboard
          </Link>
          <Link href="/admin?tab=products" className={`${styles.navLink} ${tab === 'products' ? styles.active : ''}`}>
            Products
          </Link>
          <Link href="/admin?tab=categories" className={`${styles.navLink} ${tab === 'categories' ? styles.active : ''}`}>
            Categories
          </Link>
          <Link href="/admin?tab=orders" className={`${styles.navLink} ${tab === 'orders' ? styles.active : ''}`}>
            Orders
          </Link>
          <Link href="/admin?tab=customers" className={`${styles.navLink} ${tab === 'customers' ? styles.active : ''}`}>
            Customers
          </Link>
          <Link href="/admin?tab=reviews" className={`${styles.navLink} ${tab === 'reviews' ? styles.active : ''}`}>
            Reviews
          </Link>
          <Link href="/admin?tab=settings" className={`${styles.navLink} ${tab === 'settings' ? styles.active : ''}`}>
            Settings
          </Link>
        </nav>
        <div className={styles.bottomNav}>
          <Link href="/" className={styles.navLink}>&larr; Back to Store</Link>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className="h2">{tab.charAt(0).toUpperCase() + tab.slice(1)}</h1>
          <div className={styles.headerActions}>
            <button className="btn btn-primary">Add Product</button>
            <div className={styles.avatar}>A</div>
          </div>
        </header>

        {tab === 'dashboard' && (
          <div className={styles.dashboard}>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricLabel}>Total Revenue (30d)</div>
                <div className={styles.metricValue}>₹8,45,200</div>
                <div className={styles.metricTrend}>+12.5% from last month</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricLabel}>Orders (30d)</div>
                <div className={styles.metricValue}>432</div>
                <div className={styles.metricTrend}>+5.2% from last month</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricLabel}>New Customers</div>
                <div className={styles.metricValue}>128</div>
                <div className={styles.metricTrend}>-2.1% from last month</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricLabel}>Active Products</div>
                <div className={styles.metricValue}>20</div>
              </div>
            </div>

            <div className={styles.chartsGrid}>
              <div className={styles.chartCard}>
                <h3 className="h3 mb-4">Revenue Overview</h3>
                <div className={styles.mockChart}>
                  {/* Mock bar chart */}
                  {[40, 60, 45, 80, 50, 90, 70].map((h, i) => (
                    <div key={i} className={styles.barWrapper}>
                      <div className={styles.bar} style={{ height: `${h}%` }}></div>
                      <span className={styles.barLabel}>Day {i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.recentOrders}>
                <h3 className="h3 mb-4">Recent Orders</h3>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD-8921</td>
                      <td>j.doe@example.com</td>
                      <td>Oct 6, 2026</td>
                      <td>₹2,499</td>
                      <td><span className={styles.badgeSuccess}>Completed</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-8920</td>
                      <td>smith.a@mail.com</td>
                      <td>Oct 6, 2026</td>
                      <td>₹4,999</td>
                      <td><span className={styles.badgeSuccess}>Completed</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-8919</td>
                      <td>tech.lead@startup.io</td>
                      <td>Oct 5, 2026</td>
                      <td>₹12,495</td>
                      <td><span className={styles.badgeSuccess}>Completed</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-8918</td>
                      <td>m.kumar@design.in</td>
                      <td>Oct 5, 2026</td>
                      <td>₹799</td>
                      <td><span className={styles.badgeSuccess}>Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {tab !== 'dashboard' && (
          <div className={styles.emptyState}>
            <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)} Management</h2>
            <p className="text-muted mt-2">Module is loaded and ready for backend integration.</p>
          </div>
        )}
      </main>
    </div>
  );
}
