import "@/styles/globals.css";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="relative h-[100vh]">
      <Component {...pageProps} />
    </main>
  );
};

export default App;
