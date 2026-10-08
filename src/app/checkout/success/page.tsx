import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
      <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🎉</div>
      <h1 className="h1 mb-6">Payment Successful!</h1>
      <p className="text-lg text-muted max-w-2xl mb-8">
        Thank you for your purchase. Your order has been processed and your digital products are ready for download.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="/account?tab=downloads" className="btn btn-primary">Go to Downloads</Link>
        <Link href="/shop" className="btn btn-secondary">Continue Shopping</Link>
      </div>
    </div>
  );
}
