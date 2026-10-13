'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ProductVisual } from '@/components/ProductVisual';
import styles from './page.module.css';
import { useState } from 'react';

const formatPrice = (p: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  // Show empty state if cart is empty
  if (items.length === 0 && !submitted) {
    return (
      <div className={styles.checkoutPage}>
        <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🛒</div>
          <h2 className="h2" style={{ marginBottom: '16px' }}>Your cart is empty</h2>
          <p className="text-muted" style={{ marginBottom: '32px' }}>Add some products before checking out.</p>
          <Link href="/shop" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutPage}>
      <div className="container">
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            Method<span className={styles.dot}>.</span>
          </Link>
          <h1 className="h2">Checkout</h1>
        </div>

        <div className={styles.layout}>
          <div className={styles.main}>
            {/* Customer Information */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Customer Information</h2>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Billing Details</h2>
              <div className={styles.formGrid}>
                <div className={styles.formGroupRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className={styles.input} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="country">Country / Region</label>
                  <select id="country" className={styles.input}>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Payment Method</h2>
              <div className={styles.paymentMethods}>
                <label className={styles.paymentOption}>
                  <input type="radio" name="payment" defaultChecked />
                  <div className={styles.paymentContent}>
                    <span className={styles.paymentName}>Credit Card</span>
                    <div className={styles.cardIcons}>
                      <span className={styles.cardIcon}>💳</span>
                    </div>
                  </div>
                </label>

                <div className={styles.cardForm}>
                  <div className={styles.formGroup}>
                    <label>Card Number</label>
                    <input type="text" className={styles.input} placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className={styles.formGroupRow}>
                    <div className={styles.formGroup}>
                      <label>Expiration</label>
                      <input type="text" className={styles.input} placeholder="MM/YY" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>CVC</label>
                      <input type="text" className={styles.input} placeholder="123" />
                    </div>
                  </div>
                </div>

                <label className={styles.paymentOption}>
                  <input type="radio" name="payment" />
                  <div className={styles.paymentContent}>
                    <span className={styles.paymentName}>UPI / Net Banking</span>
                  </div>
                </label>
              </div>
            </div>

            <div className={styles.termsGroup}>
              <label className={styles.checkbox}>
                <input type="checkbox" required />
                <span>I agree to the Terms of Service and Refund Policy.</span>
              </label>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>

              <div className={styles.itemList}>
                {items.map((item) => (
                  <div key={item.product.id} className={styles.item}>
                    <div className={styles.itemVisual}>
                      <ProductVisual name={item.product.name} category={item.product.categoryId} imageUrl={item.product.imageUrl} />
                      <span className={styles.itemQty}>{item.quantity}</span>
                    </div>
                    <div className={styles.itemInfo}>
                      <div className={styles.itemName}>{item.product.name}</div>
                      <div className={styles.itemLicense}>{item.product.licenseType}</div>
                    </div>
                    <div className={styles.itemPrice}>{formatPrice(item.product.price * item.quantity)}</div>
                  </div>
                ))}
              </div>

              <div className={styles.divider}></div>

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Subtotal</span>
                <span className={styles.summaryValue}>{formatPrice(subtotal)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Tax (18%)</span>
                <span className={styles.summaryValue}>{formatPrice(tax)}</span>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.totalRow}>
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <Link
                href="/checkout/success"
                className={`btn btn-primary ${styles.payBtn}`}
                onClick={() => clearCart()}
              >
                Pay {formatPrice(total)}
              </Link>

              <div className={styles.secureBadge}>
                <span className={styles.lockIcon}>🔒</span> Payments are secure and encrypted
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
