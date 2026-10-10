import styles from './page.module.css';

export default function CareersPage() {
  return (
    <div className={styles.careers}>
      <div className={styles.hero}>
        <img src="/images/careers.png" alt="Careers at Method" className={styles.heroBg} />
        <div className={styles.heroOverlay}>
          <div className="container">
            <h1 className={styles.title}>Build the future of digital commerce.</h1>
            <p className={styles.subtitle}>Join our team of designers, engineers, and creators working remotely across the globe.</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ padding: '80px 0', paddingBottom: '120px' }}>
        <h2 className="h2" style={{ marginBottom: '40px' }}>Open Positions</h2>
        <div className={styles.jobsList}>
          <div className={styles.jobCard}>
            <h3>Senior Frontend Engineer</h3>
            <span className={styles.tag}>Remote</span>
            <span className={styles.tag}>Engineering</span>
          </div>
          <div className={styles.jobCard}>
            <h3>Product Designer</h3>
            <span className={styles.tag}>New York / Remote</span>
            <span className={styles.tag}>Design</span>
          </div>
          <div className={styles.jobCard}>
            <h3>Customer Success Manager</h3>
            <span className={styles.tag}>Remote</span>
            <span className={styles.tag}>Support</span>
          </div>
        </div>
      </div>
      
      {/* PERKS SECTION */}
      <div className={styles.perksSection}>
        <div className="container">
          <h2 className="h2" style={{ textAlign: 'center', marginBottom: '64px' }}>Benefits & Perks</h2>
          <div className={styles.perksGrid}>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🌍</div>
              <h3>Work from anywhere</h3>
              <p>We are a remote-first team. Work from the comfort of your home, a cafe, or a co-working space.</p>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>💻</div>
              <h3>Home office stipend</h3>
              <p>We provide a $2,000 stipend to set up your perfect workspace, plus a brand new MacBook Pro.</p>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🌴</div>
              <h3>Unlimited PTO</h3>
              <p>We believe in resting to do your best work. Take time off whenever you need it.</p>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🏥</div>
              <h3>Premium Healthcare</h3>
              <p>Full medical, dental, and vision coverage for you and your dependents.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
