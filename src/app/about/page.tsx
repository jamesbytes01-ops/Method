import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Designing the tools that design the future.</h1>
          <p className={styles.paragraph}>
            Method was founded with a single mission: to create a curated, high-end marketplace for the digital assets and tools that professionals rely on every single day.
          </p>
          <p className={styles.paragraph}>
            We grew tired of sifting through thousands of low-quality templates and unverified software. We believe that your digital workspace should be as premium, secure, and thoughtfully designed as the physical tools you use.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src="/images/about.png" alt="Method Design Team" className={styles.aboutImage} />
        </div>
        <div className={styles.statsSection}>
          <div className={styles.stat}>
            <h3>10M+</h3>
            <p>Downloads</p>
          </div>
          <div className={styles.stat}>
            <h3>500+</h3>
            <p>Vetted Creators</p>
          </div>
          <div className={styles.stat}>
            <h3>99.9%</h3>
            <p>Uptime SLA</p>
          </div>
        </div>
      </div>
      
      {/* LEADERSHIP SECTION */}
      <div className={styles.leadershipSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.textSection}>
            <h2 className="h2 mb-4">Meet the Leadership</h2>
            <p className={styles.paragraph} style={{ fontSize: '1.25rem' }}>Our founders bring decades of experience from the world's most innovative tech companies, united by a shared vision to build the definitive marketplace for creators.</p>
          </div>
          <div className={styles.leaderGrid}>
            <div className={styles.leaderCard}>
              <div className={styles.leaderAvatarPlaceholder} style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}></div>
              <h3>Sarah Jenkins</h3>
              <p>CEO & Co-founder</p>
            </div>
            <div className={styles.leaderCard}>
              <div className={styles.leaderAvatarPlaceholder} style={{ background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' }}></div>
              <h3>David Chen</h3>
              <p>Chief Product Officer</p>
            </div>
            <div className={styles.leaderCard}>
              <div className={styles.leaderAvatarPlaceholder} style={{ background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)' }}></div>
              <h3>Elena Rostova</h3>
              <p>Head of Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
