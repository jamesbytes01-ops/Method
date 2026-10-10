export default function OrdersPage() {
  return (
    <div>
      <h2 className="h3 mb-6">Order History</h2>
      <div style={{ padding: '40px', border: '1px solid var(--border-subtle)', borderRadius: '16px', textAlign: 'center' }}>
        <p className="text-muted">You have no recent orders. Once you purchase an item, your receipt and order details will appear here.</p>
      </div>
    </div>
  );
}
