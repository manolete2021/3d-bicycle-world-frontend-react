const AUTH_STORAGE_KEY = 'bw_auth_user';

// Save user session object in local storage.
export function saveAuthSession(user) {
  if (!user) return;
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

// Read and validate user session from local storage.
export function getAuthSession() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw);
    if (!user?.token) return null;
    return user;
  } catch {
    return null;
  }
}

// Remove user session from local storage.
export function clearAuthSession() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
