import Header from "../Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout