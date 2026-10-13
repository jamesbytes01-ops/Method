'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

const formatPrice = (p: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

export function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
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
        {product.oldPrice && (
          <span className={styles.savingBadge}>
            Save {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
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
      </div>

      <div className={styles.actions}>
        <div className={styles.qtyWrapper}>
          <button className={styles.qtyBtn} onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
          <input type="number" value={qty} readOnly className={styles.qtyInput} />
          <button className={styles.qtyBtn} onClick={() => setQty(q => q + 1)}>+</button>
        </div>
        <button
          className={`btn btn-primary ${styles.buyBtn} ${added ? styles.addedBtn : ''}`}
          onClick={handleAddToCart}
        >
          {added ? '✓ Added to cart!' : 'Add to cart'}
        </button>
        <button className={`btn btn-secondary ${styles.wishlistBtn}`} aria-label="Add to wishlist">♡</button>
      </div>

      <Link href="/checkout" className={`btn btn-accent ${styles.checkoutBtn}`}>Buy it now</Link>
    </div>
  );
}
