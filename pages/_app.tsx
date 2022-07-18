import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools"
import { useEffect, useState } from 'react'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR && <QueryClientProvider client={queryClient}>
    <Component  {...pageProps} />
    <ReactQueryDevtools />
  </QueryClientProvider>


}

export default MyApp
