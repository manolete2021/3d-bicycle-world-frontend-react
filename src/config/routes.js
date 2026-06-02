// Route paths used across the app.
export const ROUTES = {
    home: '/',
    products: '/products',
    about: '/about',
    contact: '/contact',
    login: '/login',
    sign_in: '/sign_in',
    sign_up: '/sign_up',
    forgot_password: '/forgot_password',
    logout: '/logout',
    register: '/register',
    profile: '/profile',
        
}
// Menu links shown in the header.
export const menuItems = [
    {
        key: 'home',
        name: 'Home',
        path: ROUTES.home,
        icon: 'home',
    },
    {
        key: 'products',
        name: 'Products',
        path: ROUTES.products,
        icon: 'products',
    },
    {
        key: 'about',
        name: 'About',
        path: ROUTES.about,
        icon: 'about',
    },
    {
        key: 'contact',
        name: 'Contact',
        path: ROUTES.contact,
        icon: 'contact',
    },
    {
        key: 'sign_in',
        name: 'Sign In',
        path: ROUTES.sign_in,
        icon: 'sign_in',
    },
    {
        key: 'sign_up',
        name: 'Sign Up',
        path: ROUTES.sign_up,
        icon: 'sign_up',
    },
]
