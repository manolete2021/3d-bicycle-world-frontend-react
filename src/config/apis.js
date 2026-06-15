// Base URL/dominio for backend API.
export const API_URL = 'https://backend-3d-bicycle-world-users.onrender.com';
// url local localhost:5000
//export const API_URL = 'http://localhost:5000';

// API endpoints grouped by auth action.
export const apiEndpoints = {
    login: `${API_URL}/api/v1/sign_in`,
    register: `${API_URL}/api/v1/sign_up`,
    logout: `${API_URL}/api/v1/sign_out`,
    
}

