import { Navigate, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Profile from '../pages/Profile';



// Central route map for all page components.
function AppRoutes() {
    return (
        // Route definitions by path.
        <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.products} element={<Products />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={ROUTES.login} element={<Navigate to={ROUTES.sign_in} replace />} />
            <Route path={ROUTES.sign_in} element={<SignIn />} />
            <Route path={ROUTES.sign_up} element={<SignUp />} />
            <Route path={ROUTES.forgot_password} element={<ForgotPassword />} />
            <Route path={ROUTES.profile} element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes;