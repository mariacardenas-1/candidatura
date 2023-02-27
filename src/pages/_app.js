import '@/styles/globals.css'
import MainLayout from '@/layouts/MainLayout'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <Analytics />
    </MainLayout>
  )
}
