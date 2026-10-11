import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import styles from './page.module.css';
import Link from 'next/link';

export const instant = false;

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string; deals?: string }> }) {
  const params = await searchParams;
  const categoryId = params.category;
  const isDeals = params.deals === 'true';
  
  let displayedProducts = products;
  let pageTitle = "All Products";
  let pageDesc = "Explore our entire catalog of premium digital products.";

  if (categoryId) {
    displayedProducts = products.filter(p => p.categoryId === categoryId);
    const cat = categories.find(c => c.id === categoryId);
    if (cat) {
      pageTitle = cat.name;
      pageDesc = cat.description;
    }
  } else if (isDeals) {
    displayedProducts = products.filter(p => p.badge === 'Sale');
    pageTitle = "Deals & Special Offers";
    pageDesc = "Limited time discounts on premium software and resources.";
  }

  return (
    <div className={styles.shop}>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className="h1">{pageTitle}</h1>
          <p className="text-lg text-muted mt-2 max-w-2xl">{pageDesc}</p>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        {/* SIDEBAR FILTERS */}
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Categories</h3>
            <ul className={styles.filterList}>
              <li>
                <Link href="/shop" className={!categoryId && !isDeals ? styles.activeFilter : ''}>All Products</Link>
              </li>
              {categories.map(c => (
                <li key={c.id}>
                  <Link href={`/shop?category=${c.id}`} className={categoryId === c.id ? styles.activeFilter : ''}>
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop?deals=true" className={`${isDeals ? styles.activeFilter : ''} ${styles.accentFilter}`}>Special Deals</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Price Range</h3>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkbox}><input type="checkbox" /> Under ₹1,000</label>
              <label className={styles.checkbox}><input type="checkbox" /> ₹1,000 - ₹2,500</label>
              <label className={styles.checkbox}><input type="checkbox" /> ₹2,500 - ₹5,000</label>
              <label className={styles.checkbox}><input type="checkbox" /> Over ₹5,000</label>
            </div>
          </div>
          
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Platform</h3>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkbox}><input type="checkbox" /> Windows</label>
              <label className={styles.checkbox}><input type="checkbox" /> macOS</label>
              <label className={styles.checkbox}><input type="checkbox" /> Linux</label>
              <label className={styles.checkbox}><input type="checkbox" /> Web / Cloud</label>
            </div>
          </div>
          
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Rating</h3>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkbox}><input type="checkbox" /> ★★★★ & Up</label>
              <label className={styles.checkbox}><input type="checkbox" /> ★★★ & Up</label>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className={styles.main}>
          <div className={styles.toolbar}>
            <div className={styles.resultsCount}>
              Showing {displayedProducts.length} results
            </div>
            <div className={styles.sort}>
              <label htmlFor="sort">Sort by:</label>
              <select id="sort" className={styles.sortSelect}>
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
                <option>Top Rated</option>
              </select>
            </div>
          </div>
          
          {displayedProducts.length > 0 ? (
            <div className={styles.productGrid}>
              {displayedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🔍</div>
              <h3>No products found</h3>
              <p className="text-muted">Try adjusting your filters or browse all categories.</p>
              <Link href="/shop" className="btn btn-primary mt-4">Clear filters</Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
