import styles from './page.module.css';

export function generateStaticParams() {
  return [
    { slug: 'privacy' },
    { slug: 'terms' },
    { slug: 'refunds' },
    { slug: 'licenses' },
  ];
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const titles: Record<string, string> = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    refunds: 'Refund Policy',
    licenses: 'License Policy'
  };

  const title = titles[slug] || 'Legal Information';

  return (
    <div className={styles.legal}>
      <div className={`container ${styles.container}`}>
        <div className={styles.sidebar}>
          <ul>
            <li className={slug === 'privacy' ? styles.active : ''}><a href="/legal/privacy">Privacy Policy</a></li>
            <li className={slug === 'terms' ? styles.active : ''}><a href="/legal/terms">Terms of Service</a></li>
            <li className={slug === 'refunds' ? styles.active : ''}><a href="/legal/refunds">Refund Policy</a></li>
            <li className={slug === 'licenses' ? styles.active : ''}><a href="/legal/licenses">License Policy</a></li>
          </ul>
        </div>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p className={styles.date}>Last updated: October 2026</p>
          <div className={styles.text}>
            <p>This is a legally binding agreement between you and Method. By using our services, you agree to these terms.</p>
            <h2>1. General Provisions</h2>
            <p>We provide a platform for digital goods. We strive for 99.9% uptime and ensure secure transactions.</p>
            <h2>2. User Responsibilities</h2>
            <p>You must provide accurate information when creating an account and purchasing digital items.</p>
            <h2>3. Intellectual Property</h2>
            <p>All items on this marketplace are the intellectual property of their respective creators. Redistribution is strictly prohibited without appropriate licenses.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
