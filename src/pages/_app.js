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
    background-color: #141414;
    height: 300vh;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
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
