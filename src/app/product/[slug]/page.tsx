import { products } from '@/data/products';
import { ProductVisual } from '@/components/ProductVisual';
import { ProductCard } from '@/components/ProductCard';
import styles from './page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(p);
  };

  return (
    <div className={styles.productPage}>
      {/* BREADCRUMBS */}
      <div className="container">
        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <Link href={`/shop?category=${product.categoryId}`}>{product.categoryId.replace('-', ' ')}</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{product.name}</span>
        </div>
      </div>

      {/* PRODUCT MAIN */}
      <div className={`container ${styles.mainSection}`}>
        <div className={styles.visualCol}>
          <div className={styles.visualWrapper}>
            {product.badge && <span className={`${styles.badge} ${product.badge === 'Sale' ? styles.badgeAccent : ''}`}>{product.badge}</span>}
            <ProductVisual name={product.name} category={product.categoryId} imageUrl={product.imageUrl} className={styles.visualSvg} />
          </div>
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>🛡️ Verified License</div>
            <div className={styles.trustItem}>⚡ Instant Delivery</div>
            <div className={styles.trustItem}>🔄 30-Day Money Back</div>
          </div>
        </div>

        <div className={styles.infoCol}>
          <div className={styles.stickyWrapper}>
            <div className={styles.header}>
              <h1 className="h2">{product.name}</h1>
              <div className={styles.rating}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingValue}>{product.rating}</span>
                <span className={styles.reviews}>({product.reviews} reviews)</span>
              </div>
            </div>

            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.priceContainer}>
              {product.oldPrice && <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>}
              <span className={styles.price}>{formatPrice(product.price)}</span>
            </div>

            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>License type:</span>
                <span className={styles.specValue}>{product.licenseType}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Compatibility:</span>
                <span className={styles.specValue}>{product.compatibility.join(', ')}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Version:</span>
                <span className={styles.specValue}>v2.4.1 (Latest)</span>
              </div>
            </div>

            <div className={styles.actions}>
              <div className={styles.qtyWrapper}>
                <button className={styles.qtyBtn}>-</button>
                <input type="number" value="1" readOnly className={styles.qtyInput} />
                <button className={styles.qtyBtn}>+</button>
              </div>
              <Link href="/cart" className={`btn btn-primary ${styles.buyBtn}`}>Add to cart</Link>
              <button className={`btn btn-secondary ${styles.wishlistBtn}`} aria-label="Add to wishlist">♡</button>
            </div>
            
            <Link href="/checkout" className={`btn btn-accent ${styles.checkoutBtn}`}>Buy it now</Link>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className={styles.detailsSection}>
        <div className="container">
          <div className={styles.detailsGrid}>
            <div className={styles.features}>
              <h3 className="h3 mb-6">Key Features</h3>
              <ul className={styles.featureList}>
                {product.features.map((f, i) => (
                  <li key={i}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
                <li><span className={styles.check}>✓</span> Premium customer support included</li>
                <li><span className={styles.check}>✓</span> Regular updates and patches</li>
              </ul>
            </div>
            <div className={styles.included}>
              <h3 className="h3 mb-6">What's Included</h3>
              <ul className={styles.includedList}>
                <li>1x {product.licenseType} Activation Key</li>
                <li>Direct download links (Windows/macOS)</li>
                <li>Digital Invoice & Receipt</li>
                <li>Getting Started Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className={styles.relatedSection}>
          <div className="container">
            <h2 className="h2 mb-8">You might also like</h2>
            <div className={styles.productGrid}>
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
