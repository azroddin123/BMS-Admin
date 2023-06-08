import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextProgress from "next-progress";
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NextProgress delay={300} options={{ showSpinner: false }} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>;
}
