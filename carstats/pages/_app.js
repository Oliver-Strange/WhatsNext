import buildClient from "./api/build-client";
import Header from "../components/Header";

import "../styles/globals.css";

export default ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};
