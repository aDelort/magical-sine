import createCache from '@emotion/cache';
import type { AppProps } from 'next/app';

export const cache = createCache();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
