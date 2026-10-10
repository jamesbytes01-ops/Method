export default function SettingsPage() {
  return (
    <div>
      <h2 className="h3 mb-6">Account Settings</h2>
      <div style={{ padding: '40px', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Email Address</label>
          <input type="email" value="siddharth@example.com" disabled style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Password</label>
          <button className="btn btn-secondary">Reset Password</button>
        </div>
      </div>
    </div>
  );
}
