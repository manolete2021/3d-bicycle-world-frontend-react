import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';



function AppRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.products} element={<Products />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={ROUTES.sign_in} element={<SignIn />} />
            <Route path={ROUTES.profile} element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes;