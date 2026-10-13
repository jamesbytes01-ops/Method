'use client';

import { Suspense } from 'react';
import ShopContent from './ShopContent';

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '80px 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
        Loading products…
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
