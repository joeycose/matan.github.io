import MainNav from "./MainNav";
import MainSection from "./MainSection"

const Layout = ({ children }) => {
    return (
        <div style={{background: "black"}}>
            <MainNav />
            <MainSection/>
            {children}
        </div>
    );
};

export default Layout;
