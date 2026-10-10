import styles from './page.module.css';

export default function SupportPage() {
  return (
    <div className={styles.support}>
      <div className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <h1>How can we help?</h1>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for articles, guides, or FAQs..." />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.imageWrapper}>
          <img src="/images/support.png" alt="Customer Support" className={styles.supportImage} />
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Account & Billing</h3>
            <p>Manage your payment methods, subscriptions, and invoice history.</p>
          </div>
          <div className={styles.card}>
            <h3>Licensing</h3>
            <p>Understand how you can use our digital products in your commercial projects.</p>
          </div>
          <div className={styles.card}>
            <h3>Technical Support</h3>
            <p>Troubleshoot issues with software installations, bugs, or compatibility.</p>
          </div>
          <div className={styles.card}>
            <h3>Refunds</h3>
            <p>Read about our 30-day money back guarantee and how to request a return.</p>
          </div>
        </div>
        
        {/* FAQ SECTION */}
        <div className={styles.faqSection}>
          <h2 className="h2 mb-6" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>How do I download a product after purchase?</h3>
              <p>Once your payment is confirmed, you will receive an email with a direct download link. You can also log into your account and navigate to the 'Downloads' section to access all your purchased files anytime.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I use the digital products for commercial work?</h3>
              <p>Yes. All products labeled with a 'Standard License' can be used for commercial work, including client projects, provided you do not redistribute the raw files.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you offer refunds?</h3>
              <p>We offer a 30-day money-back guarantee for any software that fails to function as advertised. Since digital goods are non-returnable by nature, we do not typically issue refunds for "change of mind".</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
