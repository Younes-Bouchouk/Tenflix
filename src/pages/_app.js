import { createGlobalStyle } from 'styled-components';
import Layout from '@/components/Layout/Layout';
// import '../styles/globals.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Helvetica, sans-serif;
    color: white;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul{
    list-style-type: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
