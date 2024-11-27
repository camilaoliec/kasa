import Header from "../Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
    return (
            <>
            <Header />
            <main className="layout-main">
                {children}
            </main>
            <Footer />
            </>
    );
}

export default Layout