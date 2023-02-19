import Footer from "./Footer";
import MainNav from "./MainNav";
import MainSection from "./MainSection";

const Layout = ({ children }) => {
    return (
        <>
            <div style={{ backgroundColor: "black" }}>
                <MainNav />
                <MainSection />
                <div style={{ paddingBottom: "calc(330px + 1rem)" }}>{children}</div>
                <Footer style={{ position: "fixed", bottom: 0, width: "100%", height: "80px" }} />
            </div>
        </>
    );
};

export default Layout;
