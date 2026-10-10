import { products } from '@/data/products';
import { ProductVisual } from '@/components/ProductVisual';
import styles from '../page.module.css';

export default function DownloadsPage() {
  const myProducts = [products[0], products[4]];

  return (
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
  );
}
