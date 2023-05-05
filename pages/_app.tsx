import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider enableSystem={true} attribute='class'>
      <main className={inter.variable}>
        <Component {...pageProps} />
      </main>
     </ThemeProvider>
    </>
  );
}

export default MyApp;
