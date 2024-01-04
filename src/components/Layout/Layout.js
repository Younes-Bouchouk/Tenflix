import Head from 'next/head';
import Navbar from '../NavBar/NavBar';

const Layout = ({ children, title = 'Tenflix' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />

            {children}
        </>
    );
};

export default Layout;