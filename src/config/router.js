import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Home from "../pages/index";
import { useEffect } from "react";
import Global from "../pages/global-indicator";
import Human from "../pages/human_resources";
import Financial from "../pages/financial_analysis";


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return null;
}

function AppRouter() {
    return (
        <Router>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/global-indicators" element={<Global />} />
                <Route path="/human-resources-report" element={<Human />} />
                <Route path="/financial-analysis" element={<Financial />} />
            </Routes>

        </Router>
    )
}

export default AppRouter;