import Footer from "./Footer";
import MainNav from "./MainNav";
import MainSection from "./MainSection";

const Layout = ({ children }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "black", flex: "1" }}>
                <MainNav />
                <MainSection />
                <div style={{ paddingBottom: "calc(330px + 1rem)", flex: "1" }}>{children}</div>
            </div>
            <Footer style={{ width: "100%", height: "80px" }} />
        </div>
    );
};

export default Layout;
