'use client';

import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import styles from './page.module.css';
import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'top-rated';

const PRICE_RANGES = [
  { label: 'Under ₹1,000', min: 0, max: 1000 },
  { label: '₹1,000 – ₹2,500', min: 1000, max: 2500 },
  { label: '₹2,500 – ₹5,000', min: 2500, max: 5000 },
  { label: 'Over ₹5,000', min: 5000, max: Infinity },
];

const PLATFORMS = ['Windows', 'macOS', 'Linux', 'Web / Cloud'];

export default function ShopContent() {
  const searchParams = useSearchParams();

  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [isDeals, setIsDeals] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('featured');
  const [activePrices, setActivePrices] = useState<number[]>([]);
  const [activePlatforms, setActivePlatforms] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    const deals = searchParams.get('deals') === 'true';
    const q = searchParams.get('search');
    setCategoryId(cat);
    setIsDeals(deals);
    if (q) setSearchQuery(q);
    else setSearchQuery('');
  }, [searchParams]);

  const togglePrice = (idx: number) => {
    setActivePrices(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const togglePlatform = (p: string) => {
    setActivePlatforms(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const clearFilters = () => {
    setActivePrices([]);
    setActivePlatforms([]);
    setMinRating(null);
    setSearchQuery('');
    setSortKey('featured');
  };

  const displayedProducts = useMemo(() => {
    let list = [...products];
    if (categoryId) list = list.filter(p => p.categoryId === categoryId);
    if (isDeals) list = list.filter(p => p.badge === 'Sale');
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryId.toLowerCase().includes(q)
      );
    }
    if (activePrices.length > 0) {
      list = list.filter(p =>
        activePrices.some(idx => {
          const r = PRICE_RANGES[idx];
          return p.price >= r.min && p.price < r.max;
        })
      );
    }
    if (activePlatforms.length > 0) {
      list = list.filter(p =>
        activePlatforms.some(platform =>
          p.compatibility.some(c =>
            c.toLowerCase().includes(platform.toLowerCase().split(' /')[0])
          )
        )
      );
    }
    if (minRating !== null) list = list.filter(p => p.rating >= minRating);
    switch (sortKey) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'newest': list.sort((a, b) => b.id.localeCompare(a.id)); break;
      case 'top-rated': list.sort((a, b) => b.rating - a.rating); break;
      case 'featured': list.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)); break;
    }
    return list;
  }, [categoryId, isDeals, searchQuery, activePrices, activePlatforms, minRating, sortKey]);

  const pageTitle = categoryId
    ? (categories.find(c => c.id === categoryId)?.name ?? 'Products')
    : isDeals ? 'Deals & Special Offers'
    : searchQuery ? `Results for "${searchQuery}"`
    : 'All Products';

  const hasActiveFilters = activePrices.length > 0 || activePlatforms.length > 0 || minRating !== null;

  return (
    <div className={styles.shop}>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className="h1">{pageTitle}</h1>
          {searchQuery && (
            <p className="text-lg text-muted mt-2">
              {displayedProducts.length} result{displayedProducts.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <span className={styles.filterTitle}>Filters</span>
            {hasActiveFilters && (
              <button className={styles.clearBtn} onClick={clearFilters}>Clear all</button>
            )}
          </div>

          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Search</h3>
            <input
              type="text"
              placeholder="Search products..."
              className={styles.filterSearch}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Categories</h3>
            <ul className={styles.filterList}>
              <li>
                <Link href="/shop" className={!categoryId && !isDeals ? styles.activeFilter : styles.filterLink}>
                  All Products
                </Link>
              </li>
              {categories.map(c => (
                <li key={c.id}>
                  <Link
                    href={`/shop?category=${c.id}`}
                    className={categoryId === c.id ? styles.activeFilter : styles.filterLink}
                  >
                    <span>{c.icon}</span> {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop?deals=true"
                  className={`${isDeals ? styles.activeFilter : styles.filterLink} ${styles.accentFilter}`}
                >
                  🔥 Special Deals
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Price Range</h3>
            <div className={styles.checkboxGroup}>
              {PRICE_RANGES.map((range, idx) => (
                <label key={idx} className={styles.checkbox}>
                  <input type="checkbox" checked={activePrices.includes(idx)} onChange={() => togglePrice(idx)} />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Platform</h3>
            <div className={styles.checkboxGroup}>
              {PLATFORMS.map(p => (
                <label key={p} className={styles.checkbox}>
                  <input type="checkbox" checked={activePlatforms.includes(p)} onChange={() => togglePlatform(p)} />
                  {p}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Min. Rating</h3>
            <div className={styles.checkboxGroup}>
              {[4.5, 4.0, 3.5].map(r => (
                <label key={r} className={styles.checkbox}>
                  <input
                    type="radio"
                    name="rating"
                    checked={minRating === r}
                    onChange={() => setMinRating(r)}
                  />
                  {'★'.repeat(Math.floor(r))} {r}+
                </label>
              ))}
              {minRating !== null && (
                <button className={styles.clearBtn} onClick={() => setMinRating(null)}>Clear rating</button>
              )}
            </div>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.toolbar}>
            <div className={styles.resultsCount}>
              Showing <strong>{displayedProducts.length}</strong> result{displayedProducts.length !== 1 ? 's' : ''}
            </div>
            <div className={styles.sort}>
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                className={styles.sortSelect}
                value={sortKey}
                onChange={e => setSortKey(e.target.value as SortKey)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
                <option value="top-rated">Top Rated</option>
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
              <button className="btn btn-primary mt-4" onClick={clearFilters}>Clear filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
