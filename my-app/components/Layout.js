import MainNav from "./MainNav";
import MainSection from "./MainSection"

const Layout = ({ children }) => {
    return (
        <div>
            <MainNav />
            <MainSection/>
            {children}
        </div>
    );
};

export default Layout;
