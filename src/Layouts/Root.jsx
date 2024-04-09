import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Root = () => {
    return (
        <div>
            <Helmet>
                <title>DreamHome | Home</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;