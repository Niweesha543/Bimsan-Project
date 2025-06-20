// File: tour-app/src/lib/api.js
// API Service Layer for connecting Next.js frontend with Express backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (config.body && typeof config.body !== 'string') {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET request
  async get(endpoint) {
    return this.request(endpoint);
  }

  // POST request
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: data,
    });
  }

  // PUT request
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: data,
    });
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();

// Specific API functions for tour app
export const tourApi = {
  // Test connection
  testConnection: () => apiService.get('/api/test'),
  
  // Tour-related API calls
  getAllTours: () => apiService.get('/api/tours'),
  getTourById: (id) => apiService.get(`/api/tours/${id}`),
  createTour: (tourData) => apiService.post('/api/tours', tourData),
  updateTour: (id, tourData) => apiService.put(`/api/tours/${id}`, tourData),
  deleteTour: (id) => apiService.delete(`/api/tours/${id}`),
  
  // User-related API calls (if needed)
  getUsers: () => apiService.get('/api/users'),
  getUserById: (id) => apiService.get(`/api/users/${id}`),
  createUser: (userData) => apiService.post('/api/users', userData),
  
  // Authentication API calls (if needed)
  login: (credentials) => apiService.post('/api/auth/login', credentials),
  register: (userData) => apiService.post('/api/auth/register', userData),
  logout: () => apiService.post('/api/auth/logout'),
};

// Export default for easier imports
export default apiService;