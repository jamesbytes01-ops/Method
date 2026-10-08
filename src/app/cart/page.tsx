import Link from 'next/link';
import { products } from '@/data/products';
import { ProductVisual } from '@/components/ProductVisual';
import styles from './page.module.css';

export default function CartPage() {
  // Mock cart items based on the data
  const cartItems = [
    { product: products[0], quantity: 1 }, // Flowdesk Pro
    { product: products[4], quantity: 1 }, // Archive One
  ];

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(p);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discount = 0;
  const tax = subtotal * 0.18; // 18% GST mock
  const total = subtotal - discount + tax;

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1 className="h1 mb-12">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className={styles.layout}>
            <div className={styles.main}>
              <div className={styles.cartHeader}>
                <div className={styles.colProduct}>Product</div>
                <div className={styles.colQty}>Quantity</div>
                <div className={styles.colTotal}>Total</div>
              </div>
              
              <div className={styles.cartList}>
                {cartItems.map((item, idx) => (
                  <div key={idx} className={styles.cartItem}>
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
                          <button className={styles.actionBtn}>Remove</button>
                          <span className={styles.separator}>|</span>
                          <button className={styles.actionBtn}>Save for later</button>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.colQty}>
                      <div className={styles.qtyWrapper}>
                        <button className={styles.qtyBtn}>-</button>
                        <input type="number" value={item.quantity} readOnly className={styles.qtyInput} />
                        <button className={styles.qtyBtn}>+</button>
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
                  <span className={styles.summaryLabel}>Discount</span>
                  <span className={styles.summaryValue}>—</span>
                </div>
                
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Estimated Tax</span>
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
