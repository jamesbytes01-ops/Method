import { products } from '@/data/products';
import { ProductVisual } from '@/components/ProductVisual';
import { ProductCard } from '@/components/ProductCard';
import { ProductActions } from './ProductActions';
import styles from './page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Pre-generate all product pages at build time
export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

// Dynamic metadata per product
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | Method Digital`,
    description: product.description,
  };
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

  return (
    <div className={styles.productPage}>
      {/* BREADCRUMBS */}
      <div className="container">
        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <Link href={`/shop?category=${product.categoryId}`}>
            {product.categoryId.replace('-', ' ')}
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{product.name}</span>
        </div>
      </div>

      {/* PRODUCT MAIN */}
      <div className={`container ${styles.mainSection}`}>
        <div className={styles.visualCol}>
          <div className={styles.visualWrapper}>
            {product.badge && (
              <span className={`${styles.badge} ${product.badge === 'Sale' ? styles.badgeAccent : ''}`}>
                {product.badge}
              </span>
            )}
            <ProductVisual
              name={product.name}
              category={product.categoryId}
              imageUrl={product.imageUrl}
              className={styles.visualSvg}
            />
          </div>
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>🛡️ Verified License</div>
            <div className={styles.trustItem}>⚡ Instant Delivery</div>
            <div className={styles.trustItem}>🔄 30-Day Money Back</div>
          </div>
        </div>

        {/* Client component handles all interactive cart functionality */}
        <div className={styles.infoCol}>
          <ProductActions product={product} />
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
                <li><span className={styles.check}>✓</span>Premium customer support included</li>
                <li><span className={styles.check}>✓</span>Regular updates and patches</li>
              </ul>
            </div>
            <div className={styles.included}>
              <h3 className="h3 mb-6">What&apos;s Included</h3>
              <ul className={styles.includedList}>
                <li>1x {product.licenseType} Activation Key</li>
                <li>Direct download links</li>
                <li>Digital Invoice &amp; Receipt</li>
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
