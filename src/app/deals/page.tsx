import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Deals & Offers | Method Digital',
  description: 'Limited-time discounts on premium software, tools, and e-books. Save up to 40%.',
};

export default function DealsPage() {
  const saleProducts = products.filter(p => p.badge === 'Sale');
  const discountedProducts = products.filter(p => p.oldPrice && p.oldPrice > p.price);
  const popularDeals = products.filter(p => p.isPopular && p.oldPrice).slice(0, 4);

  const getSavingPercent = (price: number, oldPrice: number) =>
    Math.round(((oldPrice - price) / oldPrice) * 100);

  const formatPrice = (p: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroBadge}>🔥 Limited Time Deals</div>
          <h1 className={styles.heroTitle}>
            Up to 40% off.<br />While stocks last.
          </h1>
          <p className={styles.heroDesc}>
            Handpicked discounts on our most popular software, tools, and e-books. Prices return to normal soon — don't miss out.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{discountedProducts.length}+</span>
              <span className={styles.statLabel}>Active deals</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>40%</span>
              <span className={styles.statLabel}>Max discount</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>⚡</span>
              <span className={styles.statLabel}>Instant delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* SAVINGS TICKER */}
      <section className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...discountedProducts, ...discountedProducts].map((p, i) => (
            <div key={`${p.id}-${i}`} className={styles.tickerItem}>
              <span className={styles.tickerName}>{p.name}</span>
              <span className={styles.tickerSave}>Save {getSavingPercent(p.price, p.oldPrice!)}%</span>
              <span className={styles.tickerDot}>•</span>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTED DEALS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">🔥 Flash Deals</h2>
            <p className="text-muted">Our biggest discounts — grab them before they're gone.</p>
          </div>
          <div className={styles.dealsGrid}>
            {discountedProducts.map(p => (
              <Link href={`/product/${p.slug}`} key={p.id} className={styles.dealCard}>
                <div className={styles.dealBadge}>
                  -{getSavingPercent(p.price, p.oldPrice!)}%
                </div>
                <div className={styles.dealCategory}>
                  {p.categoryId.replace('-', ' ').toUpperCase()}
                </div>
                <h3 className={styles.dealTitle}>{p.name}</h3>
                <p className={styles.dealDesc}>{p.description.slice(0, 80)}…</p>
                <div className={styles.dealPricing}>
                  <span className={styles.dealOldPrice}>{formatPrice(p.oldPrice!)}</span>
                  <span className={styles.dealPrice}>{formatPrice(p.price)}</span>
                </div>
                <div className={styles.dealCta}>View Deal →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ON SALE */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">Bestsellers on Sale</h2>
            <p className="text-muted">Customer favorites at a reduced price.</p>
          </div>
          <div className={styles.grid}>
            {(popularDeals.length > 0 ? popularDeals : saleProducts).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ALL SALE ITEMS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">All Sale Items</h2>
          </div>
          <div className={styles.grid}>
            {saleProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* URGENCY CTA */}
      <section className={styles.urgencyCta}>
        <div className="container">
          <div className={styles.urgencyContent}>
            <div className={styles.urgencyIcon}>⏰</div>
            <div>
              <h2 className="h2">Deals end soon.</h2>
              <p>These prices are temporary. Don't wait — secure your discount now.</p>
            </div>
            <Link href="/shop" className="btn btn-primary">Shop All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
