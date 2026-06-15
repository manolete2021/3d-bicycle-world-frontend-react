import { apiEndpoints } from '../config/apis';

// Send sign-in request and return parsed API response.
export async function signIn({ email, password }) {
  const response = await fetch(apiEndpoints.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  // Default fallback if response body is empty or invalid JSON.
  let data = {};
  
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (response.status === 400 || response.status === 500) {
    const message = data.message ;
    throw new Error(message);
  }

  if (response.status !== 200 && response.status !== 201) {
    const message =
      data.message ||
      data.error ||
      (Array.isArray(data.errors) ? data.errors.join(', ') : null);
    throw new Error(message);
  }

  // Return payload expected by auth context login handler.
  return data;
}

// Send sign-up request and return parsed API response.
export async function signUp({ name, email, password }) {
  const response = await fetch(apiEndpoints.register, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (response.status !== 200 && response.status !== 201) {
    const message =
      data.message ||
      data.error ||
      (Array.isArray(data.errors) ? data.errors.join(', ') : null) ||
      'Sign up failed. Please check your details and try again.';
    throw new Error(message);
  }

  return data;
}

// Send sign-out request with user token.
export async function signOut({ token }) {
  const response = await fetch(apiEndpoints.logout, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ token }),
  });

  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (response.status !== 200 && response.status !== 201) {
    const message =
      data.message ||
      data.error ||
      (Array.isArray(data.errors) ? data.errors.join(', ') : null) ||
      'Sign out failed. Please try again.';
    throw new Error(message);
  }

  return data;
}
