import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'E-books & Guides | Method Digital',
  description: 'Premium developer and design e-books. Deep-dive guides written by industry experts.',
};

export default function EbooksPage() {
  const ebooks = products.filter(p => p.categoryId === 'e-books');
  const techBooks = ebooks.filter(p =>
    p.name.toLowerCase().includes('web') ||
    p.name.toLowerCase().includes('systems') ||
    p.name.toLowerCase().includes('architect')
  );
  const careerBooks = ebooks.filter(p =>
    p.name.toLowerCase().includes('field') ||
    p.name.toLowerCase().includes('interface') ||
    p.name.toLowerCase().includes('design')
  );

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>📚 E-books & Guides</div>
              <h1 className={styles.heroTitle}>
                Knowledge that<br />compounds.
              </h1>
              <p className={styles.heroDesc}>
                Deep-dive technical books written by practitioners, not academics. PDF, ePub, and Mobi — read anywhere, forever.
              </p>
              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>📄 PDF & ePub formats</div>
                <div className={styles.metaItem}>📱 All devices</div>
                <div className={styles.metaItem}>♾️ Yours forever</div>
              </div>
            </div>
            <div className={styles.heroBooks}>
              <div className={styles.bookStack}>
                {ebooks.slice(0, 3).map((b, i) => (
                  <div key={b.id} className={styles.bookSpine} style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}>
                    <span>{b.name.split(' ').slice(0, 2).join(' ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES NAV */}
      <section className={styles.navBar}>
        <div className="container">
          <div className={styles.navItems}>
            <a href="#all" className={`${styles.navItem} ${styles.navItemActive}`}>All Books</a>
            <a href="#tech" className={styles.navItem}>Technical</a>
            <a href="#design" className={styles.navItem}>Design & UX</a>
            <a href="#career" className={styles.navItem}>Career</a>
          </div>
        </div>
      </section>

      {/* ALL EBOOKS */}
      <section id="all" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">All E-books</h2>
            <p className="text-muted">{ebooks.length} titles in the library</p>
          </div>
          <div className={styles.grid}>
            {ebooks.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* TECH BOOKS */}
      {techBooks.length > 0 && (
        <section id="tech" className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className="h2">Technical Deep-Dives</h2>
              <p className="text-muted">Architecture, systems, and modern web engineering.</p>
            </div>
            <div className={styles.grid}>
              {techBooks.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* CAREER BOOKS */}
      {careerBooks.length > 0 && (
        <section id="career" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className="h2">Career & Craft</h2>
              <p className="text-muted">Design principles, soft skills, and industry navigation.</p>
            </div>
            <div className={styles.grid}>
              {careerBooks.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* FORMATS */}
      <section className={styles.formats}>
        <div className="container">
          <h2 className="h2 text-center" style={{ marginBottom: '3rem' }}>Available in every format</h2>
          <div className={styles.formatGrid}>
            {[
              { icon: '📄', title: 'PDF', desc: 'Perfect for desktop reading with all formatting preserved.' },
              { icon: '📖', title: 'ePub', desc: 'Reflows beautifully on any screen size and e-reader.' },
              { icon: '📱', title: 'Mobi', desc: 'Native support on Kindle devices and the Kindle app.' },
              { icon: '🎧', title: 'Audiobook', desc: 'Select titles include a full narrated audiobook version.' },
            ].map(f => (
              <div key={f.title} className={styles.formatCard}>
                <div className={styles.formatIcon}>{f.icon}</div>
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
          <h2 className="h2">Build a reading habit.</h2>
          <p>One book a month changes how you think. Start today.</p>
          <div className={styles.ctaActions}>
            <Link href="/shop?category=e-books" className="btn btn-primary">Browse All Titles</Link>
            <Link href="/deals" className="btn btn-secondary">Check Deals</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
