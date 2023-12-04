import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared/Footer";
import NavBar from "../../shared/NavBar";


const Main = () => {
    const location = useLocation();
    const noFooter =  location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {
                noFooter || <NavBar></NavBar>
            }
            <Outlet></Outlet>
            {
                noFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Main;