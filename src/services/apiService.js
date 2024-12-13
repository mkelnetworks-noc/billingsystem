// API calls and other service
// 2.3. services/
// The services/ folder will handle API calls and other external integrations. This is where you'll place the logic for consuming the APIs.

// Example: src/services/apiService.js
const API_URL = 'https://api.mkel.com';

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};
