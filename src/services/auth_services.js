import { apiEndpoints } from '../config/apis';

export async function signIn({ email, password }) {
  const response = await fetch(apiEndpoints.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
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
      'Sign in failed. Please check your email and password.';
    throw new Error(message);
  }

  return data;
}
