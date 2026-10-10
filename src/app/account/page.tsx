import Link from 'next/link';
import { products } from '@/data/products';
import { ProductVisual } from '@/components/ProductVisual';
import styles from './page.module.css';

export default function AccountOverviewPage() {
  const myProducts = [products[0], products[4]];

  return (
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
              <p className={styles.purchaseMeta}>Purchased on Oct 12, 2026</p>
            </div>
            <div className={styles.purchaseActions}>
              <Link href={`/account/downloads`} className="btn btn-secondary">View License</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
