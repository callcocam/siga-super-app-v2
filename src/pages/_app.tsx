import '@/styles/globals.css'
import '@/scss/styles.scss'
import type { AppProps } from 'next/app'
const Scroll = () => require('tw-elements');
import messages from '../messages';

import { IntlProvider } from 'react-intl';
import { useState } from 'react';
if (typeof window !== "undefined") {
  Scroll()
}
function MyApp({ Component, pageProps }: AppProps) {
  const [locale, setLocale] = useState<any>('en');

  return <IntlProvider locale={locale} messages={messages[locale]}>
    <Component {...pageProps} />
  </IntlProvider>
}

export default MyApp
