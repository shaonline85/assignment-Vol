import "../public/css/styles.css";
import Layout from "../src/components/Layout";
import { StyleProvider, ThemePicker } from "vcc-ui";
import type { AppProps } from "next/app";

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
