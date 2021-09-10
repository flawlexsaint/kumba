import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
