import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <h1>Get in touch.</h1>
          <p>Whether you have a question about a product, licensing, or just want to say hi, our team is ready to help.</p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <strong>Email</strong>
              <span>support@method.dev</span>
            </div>
            <div className={styles.detail}>
              <strong>Office</strong>
              <span>123 Market St, San Francisco, CA 94103</span>
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input type="text" placeholder="Jane Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="jane@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea rows={6} placeholder="How can we help?"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
      
      {/* GLOBAL OFFICES */}
      <div className={styles.officesSection}>
        <div className="container">
          <h2 className="h2 mb-6" style={{ textAlign: 'center' }}>Our Global Offices</h2>
          <div className={styles.officesGrid}>
            <div className={styles.officeCard}>
              <h3>San Francisco</h3>
              <p>123 Market St, Suite 400<br/>San Francisco, CA 94103<br/>United States</p>
            </div>
            <div className={styles.officeCard}>
              <h3>London</h3>
              <p>45 Silicon Roundabout<br/>Old Street, London EC1V 9HX<br/>United Kingdom</p>
            </div>
            <div className={styles.officeCard}>
              <h3>Berlin</h3>
              <p>Kastanienallee 7-9<br/>10435 Berlin<br/>Germany</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
