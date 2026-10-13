'use client';

import Link from 'next/link';
import { ProductVisual } from '@/components/ProductVisual';
import styles from './page.module.css';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, totalItems, subtotal, removeItem, updateQty } = useCart();

  const formatPrice = (p: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1 className="h1 mb-12">Your Cart {totalItems > 0 && <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 400 }}>({totalItems} item{totalItems !== 1 ? 's' : ''})</span>}</h1>

        {items.length > 0 ? (
          <div className={styles.layout}>
            <div className={styles.main}>
              <div className={styles.cartHeader}>
                <div className={styles.colProduct}>Product</div>
                <div className={styles.colQty}>Quantity</div>
                <div className={styles.colTotal}>Total</div>
              </div>

              <div className={styles.cartList}>
                {items.map((item) => (
                  <div key={item.product.id} className={styles.cartItem}>
                    <div className={styles.colProduct}>
                      <Link href={`/product/${item.product.slug}`} className={styles.itemVisual}>
                        <ProductVisual name={item.product.name} category={item.product.categoryId} imageUrl={item.product.imageUrl} />
                      </Link>
                      <div className={styles.itemInfo}>
                        <div className={styles.itemCategory}>{item.product.categoryId.replace('-', ' ')}</div>
                        <Link href={`/product/${item.product.slug}`} className={styles.itemName}>
                          {item.product.name}
                        </Link>
                        <div className={styles.itemLicense}>{item.product.licenseType}</div>
                        <div className={styles.itemActions}>
                          <button className={styles.actionBtn} onClick={() => removeItem(item.product.id)}>Remove</button>
                        </div>
                      </div>
                    </div>

                    <div className={styles.colQty}>
                      <div className={styles.qtyWrapper}>
                        <button className={styles.qtyBtn} onClick={() => updateQty(item.product.id, item.quantity - 1)}>-</button>
                        <input type="number" value={item.quantity} readOnly className={styles.qtyInput} />
                        <button className={styles.qtyBtn} onClick={() => updateQty(item.product.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>

                    <div className={styles.colTotal}>
                      <span className={styles.itemPrice}>{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.summaryCard}>
                <h3 className="h3 mb-6">Order Summary</h3>

                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Subtotal</span>
                  <span className={styles.summaryValue}>{formatPrice(subtotal)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Estimated Tax (18% GST)</span>
                  <span className={styles.summaryValue}>{formatPrice(tax)}</span>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.totalRow}>
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>

                <Link href="/checkout" className={`btn btn-primary ${styles.checkoutBtn}`}>
                  Proceed to checkout
                </Link>

                <div className={styles.secureCheckout}>
                  <span className={styles.secureIcon}>🔒</span>
                  <span>Secure, encrypted checkout</span>
                </div>
              </div>

              <div className={styles.couponCard}>
                <h4 className={styles.couponTitle}>Have a coupon?</h4>
                <div className={styles.couponForm}>
                  <input type="text" placeholder="Enter code" className={styles.couponInput} />
                  <button className="btn btn-secondary">Apply</button>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2>Your cart is empty</h2>
            <p className="text-muted">Looks like you haven't added any products to your cart yet.</p>
            <Link href="/shop" className="btn btn-primary mt-4">Continue Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
}
