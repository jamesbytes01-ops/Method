'use client';

import Link from 'next/link';
import { Product } from '@/data/products';
import { ProductVisual } from './ProductVisual';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { slug, name, categoryId, price, oldPrice, rating, reviews, badge } = product;
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(p);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${slug}`} className={styles.imageLink}>
        {badge && <span className={`${styles.badge} ${badge === 'Sale' ? styles.badgeAccent : ''}`}>{badge}</span>}
        <ProductVisual name={name} category={categoryId} imageUrl={product.imageUrl} className={styles.visual} />
      </Link>

      <div className={styles.content}>
        <div className={styles.category}>{categoryId.replace('-', ' ').toUpperCase()}</div>
        <Link href={`/product/${slug}`} className={styles.titleLink}>
          <h3 className={styles.title}>{name}</h3>
        </Link>

        <div className={styles.meta}>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingValue}>{rating}</span>
            <span className={styles.reviews}>({reviews})</span>
          </div>

          <div className={styles.priceContainer}>
            {oldPrice && <span className={styles.oldPrice}>{formatPrice(oldPrice)}</span>}
            <span className={styles.price}>{formatPrice(price)}</span>
          </div>
        </div>

        <button
          className={`${styles.addToCartBtn} ${added ? styles.addedBtn : ''}`}
          onClick={handleAddToCart}
          aria-label={`Add ${name} to cart`}
        >
          {added ? (
            <>
              <span>✓</span> Added to cart
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Add to cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
