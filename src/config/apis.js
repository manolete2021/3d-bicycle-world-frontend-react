// Base URL for backend API. Set REACT_APP_API_URL in Vercel (or .env.local for local dev).
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// API endpoints grouped by auth action.
export const apiEndpoints = {
    login: `${API_URL}/api/v1/sign_in`,
    register: `${API_URL}/api/v1/sign_up`,
    logout: `${API_URL}/api/v1/sign_out`,
    
}

