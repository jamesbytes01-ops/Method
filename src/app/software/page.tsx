import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Software | Method Digital',
  description: 'Browse premium software with lifetime licenses — no subscriptions, no bloat.',
};

export default function SoftwarePage() {
  const softwareProducts = products.filter(p => p.categoryId === 'software');
  const productivityProducts = products.filter(p => p.categoryId === 'productivity');
  const allSoftware = products.filter(p =>
    ['software', 'productivity', 'business'].includes(p.categoryId)
  );

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroBadge}>💻 Software</div>
          <h1 className={styles.heroTitle}>
            Own it forever.<br />No subscriptions.
          </h1>
          <p className={styles.heroDesc}>
            Perpetual licenses for professional software — pay once, use forever. No renewal surprises, no feature lockouts.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}><span className={styles.statNum}>45+</span><span className={styles.statLabel}>Software titles</span></div>
            <div className={styles.stat}><span className={styles.statNum}>100%</span><span className={styles.statLabel}>Genuine licenses</span></div>
            <div className={styles.stat}><span className={styles.statNum}>⚡</span><span className={styles.statLabel}>Instant delivery</span></div>
          </div>
        </div>
      </section>

      {/* CORE SOFTWARE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">Core Software</h2>
            <p className="text-muted">Essential applications for everyday professionals.</p>
          </div>
          <div className={styles.grid}>
            {softwareProducts.length > 0
              ? softwareProducts.map(p => <ProductCard key={p.id} product={p} />)
              : allSoftware.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)
            }
          </div>
        </div>
      </section>

      {/* PRODUCTIVITY */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">Productivity Suite</h2>
            <p className="text-muted">Work smarter with tools that keep you in flow.</p>
          </div>
          <div className={styles.grid}>
            {productivityProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className="container">
          <h2 className="h2 text-center" style={{ marginBottom: '3rem' }}>Why buy software from us?</h2>
          <div className={styles.featureGrid}>
            {[
              { icon: '🔑', title: 'Genuine License Keys', desc: 'Every key is sourced directly from original developers — 100% authentic.' },
              { icon: '🔄', title: 'Lifetime Updates', desc: 'Most of our titles include free updates for the major version you purchase.' },
              { icon: '🛡️', title: 'Money-Back Guarantee', desc: '30-day no-questions-asked refund if the software doesn\'t work for you.' },
              { icon: '📦', title: 'Instant Activation', desc: 'Receive your license key by email within seconds of payment.' },
            ].map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className="h2">Not sure which software to pick?</h2>
          <p>Browse all categories or check our curated deals.</p>
          <div className={styles.ctaActions}>
            <Link href="/shop" className="btn btn-primary">Browse All Products</Link>
            <Link href="/deals" className="btn btn-secondary">See Current Deals</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
