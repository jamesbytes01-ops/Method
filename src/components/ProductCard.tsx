import Link from 'next/link';
import { Product } from '@/data/products';
import { ProductVisual } from './ProductVisual';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { slug, name, categoryId, price, oldPrice, rating, reviews, badge } = product;

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(p);
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
      </div>
    </div>
  );
}
