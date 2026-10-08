import Link from 'next/link';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductVisual } from '@/components/ProductVisual';
import styles from './page.module.css';

export default function Home() {
  const popularProducts = products.filter(p => p.isPopular).slice(0, 4);
  const securityProducts = products.filter(p => p.categoryId === 'security').slice(0, 3);
  const deals = products.filter(p => p.badge === 'Sale').slice(0, 4);
  const ebooks = products.filter(p => p.categoryId === 'e-books').slice(0, 4);
  
  const spotlightProduct = products.find(p => p.slug === 'flowdesk-pro');

  return (
    <div className={styles.home}>
      {/* 6. HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="h1 animate-fade-in">Tools worth installing.</h1>
            <p className={`text-lg text-muted ${styles.heroDesc} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
              The premium marketplace for carefully selected software, security products, and digital resources designed for modern teams.
            </p>
            <div className={`${styles.heroActions} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
              <Link href="/shop" className="btn btn-primary">Explore the marketplace</Link>
              <Link href="/shop?category=software" className="btn btn-secondary">Browse categories</Link>
            </div>
          </div>
          <div className={`${styles.heroVisuals} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCardMain}>
                <ProductVisual name="Flowdesk Pro" category="productivity" imageUrl="/images/products/flowdesk_pro_1791480200502.png" />
                <div className={styles.heroCardInfo}>
                  <span className={styles.heroCardCat}>Productivity</span>
                  <span className={styles.heroCardName}>Flowdesk Pro</span>
                </div>
              </div>
              <div className={styles.heroCardSub}>
                <ProductVisual name="CipherGuard Pro" category="security" imageUrl="/images/products/cipherguard_pro_1791480222880.png" />
              </div>
              <div className={styles.heroCardSub}>
                <ProductVisual name="DevPilot" category="dev-tools" imageUrl="/images/products/devpilot_toolkit_1791480233961.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUST STRIP */}
      <section className={styles.trust}>
        <div className={`container ${styles.trustContainer}`}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span>Instant digital delivery</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🔒</span>
            <span>Secure checkout</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛡️</span>
            <span>Verified software</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🔑</span>
            <span>Genuine licenses</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💬</span>
            <span>30-day support</span>
          </div>
        </div>
      </section>

      {/* 8. CATEGORY EXPLORATION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">Browse by category</h2>
          </div>
          <div className={styles.categoryBento}>
            {categories.map((c, i) => {
              let cardClass = styles.bentoCard;
              if (i === 0) cardClass += ` ${styles.bentoLarge}`;
              if (i === 1) cardClass += ` ${styles.bentoWide}`;
              if (i === 2) cardClass += ` ${styles.bentoTall}`;
              if (i === 3) cardClass += ` ${styles.bentoAccent}`;
              if (i === 4) cardClass += ` ${styles.bentoDark}`;
              if (i === 7) cardClass += ` ${styles.bentoWide}`;
              
              return (
                <Link href={`/shop?category=${c.id}`} key={c.id} className={cardClass}>
                  <div className={styles.bentoIcon}>{c.icon}</div>
                  <div className={styles.bentoInfo}>
                    <h3>{c.name}</h3>
                    <p>{c.description}</p>
                  </div>
                  <div className={styles.bentoCount}>{c.count} products</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FEATURED PRODUCTS */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">Popular right now</h2>
            <Link href="/shop" className={styles.linkAction}>View all popular &rarr;</Link>
          </div>
          <div className={styles.productGrid}>
            {popularProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. FEATURED PRODUCT SPOTLIGHT */}
      {spotlightProduct && (
        <section className={styles.spotlight}>
          <div className={`container ${styles.spotlightContainer}`}>
            <div className={styles.spotlightVisual}>
              <ProductVisual name={spotlightProduct.name} category={spotlightProduct.categoryId} imageUrl={spotlightProduct.imageUrl} className={styles.spotlightSvg} />
            </div>
            <div className={styles.spotlightContent}>
              <div className="badge badge-accent mb-4">Editorial Spotlight</div>
              <h2 className="h2 mb-4">Built for people who work in systems.</h2>
              <h3 className="h3 text-muted mb-6">{spotlightProduct.name}</h3>
              
              <div className={styles.spotlightMeta}>
                <div className={styles.rating}>
                  <span className={styles.star}>★</span><span className={styles.star}>★</span><span className={styles.star}>★</span><span className={styles.star}>★</span><span className={styles.star}>★</span>
                  <span className="ml-2 font-bold">{spotlightProduct.rating}/5</span>
                  <span className="text-muted ml-2">({spotlightProduct.reviews} reviews)</span>
                </div>
                
                <div className={styles.spotlightPrice}>₹2,499</div>
                
                <ul className={styles.spotlightDetails}>
                  <li>✓ Lifetime license</li>
                  <li>✓ Windows / macOS</li>
                  <li>✓ Real-time sync</li>
                </ul>
              </div>
              
              <div className={styles.spotlightActions}>
                <Link href={`/product/${spotlightProduct.slug}`} className="btn btn-primary">View product</Link>
                <button className="btn btn-secondary">Add to wishlist</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 12. SECURITY / ANTIVIRUS */}
      <section className={styles.sectionSecurity}>
        <div className="container">
          <div className={styles.securityHeader}>
            <div className={styles.securityTitle}>
              <span className={styles.securityIcon}>🛡️</span>
              <h2 className="h2">Zero-day threat protection</h2>
            </div>
            <p className="text-lg text-muted max-w-2xl">
              Don't compromise on security. Browse our selection of enterprise-grade privacy tools and real-time antivirus software curated for professionals.
            </p>
          </div>
          
          <div className={styles.securityGrid}>
            {securityProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 13. DEALS SECTION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className="h2 text-accent">Limited licenses</h2>
              <p className="text-muted mt-2">Up to 40% off selected software. Prices return to normal soon.</p>
            </div>
          </div>
          <div className={styles.productGrid}>
            {deals.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 14. E-BOOK SECTION */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">The Developer's Library</h2>
            <Link href="/shop?category=e-books" className={styles.linkAction}>Browse all books &rarr;</Link>
          </div>
          <div className={styles.productGrid}>
            {ebooks.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 15. WHY THIS MARKETPLACE */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <h2 className="h2 mb-6">Why choose Method Digital?</h2>
              <p className="text-lg text-muted mb-8">
                We're tired of subscription fatigue and bloatware. That's why we built a marketplace that prioritizes quality, transparency, and genuine ownership.
              </p>
              
              <div className={styles.whyList}>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>🎯</div>
                  <div>
                    <h4>Curated software</h4>
                    <p>We test every product before listing it.</p>
                  </div>
                </div>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>✅</div>
                  <div>
                    <h4>Verified licenses</h4>
                    <p>100% genuine keys directly from developers.</p>
                  </div>
                </div>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>💎</div>
                  <div>
                    <h4>Transparent pricing</h4>
                    <p>Clear distinctions between lifetime and recurring models.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whyImageWrapper}>
               <div className={styles.whyAbstractVisual}>
                  <div className={styles.circle1}></div>
                  <div className={styles.circle2}></div>
                  <div className={styles.cardOverlay}></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. TESTIMONIALS */}
      <section className={styles.section}>
        <div className="container">
          <h2 className="h2 text-center mb-12">Trusted by professionals</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"The fact that I can find perpetual licenses for modern developer tools here is a lifesaver. No more subscription fatigue."</p>
              <div className={styles.author}>
                <div className={styles.avatar}>SR</div>
                <div>
                  <div className={styles.authorName}>Siddharth R.</div>
                  <div className={styles.authorRole}>Senior Frontend Engineer</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"Method Digital's curation is incredible. I've discovered three utilities this month that have entirely transformed my workflow."</p>
              <div className={styles.author}>
                <div className={styles.avatar}>MK</div>
                <div>
                  <div className={styles.authorName}>Maya K.</div>
                  <div className={styles.authorRole}>Product Designer, TechFlow</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"Instant delivery and the dashboard to manage all my software keys in one place. Exactly how a marketplace should work."</p>
              <div className={styles.author}>
                <div className={styles.avatar}>AT</div>
                <div>
                  <div className={styles.authorName}>Arjun T.</div>
                  <div className={styles.authorRole}>Freelance Architect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. NEWSLETTER */}
      <section className={styles.newsletter}>
        <div className={`container ${styles.newsletterContainer}`}>
          <div className={styles.newsletterContent}>
            <h2 className="h2">Better tools. Fewer tabs.</h2>
            <p className="text-lg">Get occasional updates on useful software, new releases, and genuinely good deals.</p>
          </div>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Email address" className={styles.newsletterInput} required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

    </div>
  );
}
