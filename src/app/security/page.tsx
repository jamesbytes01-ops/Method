import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Security & Antivirus | Method Digital',
  description: 'Enterprise-grade antivirus, VPNs, and security tools. Stay protected with genuine licenses.',
};

export default function SecurityPage() {
  const securityProducts = products.filter(p => p.categoryId === 'security');
  const antivirusProducts = securityProducts.filter(p =>
    p.name.toLowerCase().includes('shield') ||
    p.name.toLowerCase().includes('cipher') ||
    p.description.toLowerCase().includes('antivirus') ||
    p.description.toLowerCase().includes('scanning')
  );
  const enterpriseProducts = securityProducts.filter(p =>
    p.description.toLowerCase().includes('enterprise') ||
    p.description.toLowerCase().includes('firewall') ||
    p.description.toLowerCase().includes('workspace')
  );

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroBadge}>🛡️ Security & Antivirus</div>
          <h1 className={styles.heroTitle}>
            Zero-day protection.<br />Real-time defense.
          </h1>
          <p className={styles.heroDesc}>
            Enterprise-grade security software for individuals and teams. From real-time antivirus to encrypted workspaces — stay safe, always.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}><span className={styles.statNum}>18+</span><span className={styles.statLabel}>Security tools</span></div>
            <div className={styles.stat}><span className={styles.statNum}>4.7★</span><span className={styles.statLabel}>Avg. rating</span></div>
            <div className={styles.stat}><span className={styles.statNum}>AI</span><span className={styles.statLabel}>Threat detection</span></div>
          </div>
        </div>
      </section>

      {/* THREAT BANNER */}
      <section className={styles.threatBanner}>
        <div className="container">
          <div className={styles.threatGrid}>
            {[
              { icon: '🔍', label: 'Real-time scanning' },
              { icon: '🧠', label: 'AI threat detection' },
              { icon: '🌐', label: 'VPN included' },
              { icon: '🔒', label: 'Ransomware shield' },
              { icon: '👤', label: 'Identity protection' },
              { icon: '🖥️', label: 'Zero-day protection' },
            ].map(t => (
              <div key={t.label} className={styles.threatItem}>
                <span className={styles.threatIcon}>{t.icon}</span>
                <span className={styles.threatLabel}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANTIVIRUS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">Antivirus & Protection</h2>
            <p className="text-muted">Lightweight, fast, and effective — protection that doesn't slow you down.</p>
          </div>
          <div className={styles.grid}>
            {(antivirusProducts.length > 0 ? antivirusProducts : securityProducts).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE SECURITY */}
      {enterpriseProducts.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className="h2">Enterprise & Advanced Security</h2>
              <p className="text-muted">Firewall, network monitoring, and secure workspaces for serious users.</p>
            </div>
            <div className={styles.grid}>
              {enterpriseProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* ALL SECURITY PRODUCTS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">All Security Products</h2>
            <Link href="/shop?category=security" className={styles.viewAll}>View in shop →</Link>
          </div>
          <div className={styles.grid}>
            {securityProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className={styles.trustSection}>
        <div className="container">
          <h2 className="h2 text-center" style={{ marginBottom: '3rem' }}>Why trust our security products?</h2>
          <div className={styles.featureGrid}>
            {[
              { icon: '✅', title: 'Verified Publishers', desc: 'Every product is sourced from official, verified security publishers.' },
              { icon: '🔑', title: 'Genuine Keys Only', desc: 'All license keys are 100% legitimate, directly from developers.' },
              { icon: '📞', title: '24/7 Support', desc: 'Get help with installation and activation any time of day.' },
              { icon: '💰', title: '30-Day Refund', desc: 'Not satisfied? Get a full refund within 30 days, no questions asked.' },
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
    </div>
  );
}
