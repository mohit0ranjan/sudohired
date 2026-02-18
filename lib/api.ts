import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for auth tokens
api.interceptors.request.use(
    (config) => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || 'An unexpected error occurred';
        if (error.response?.status === 401) {
            // Handle unauthorized (e.g., logout or refresh token)
        }
        return Promise.reject(new Error(message));
    }
);

export const hiringService = {
    uploadResume: (file: File) => {
        const formData = new FormData();
        formData.append('resume', file);
        return api.post('/resume/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },
    getAnalysis: (id: string) => api.get(`/resume/analysis/${id}`),
    getCompanies: () => api.get('/companies'),
    submitAssessment: (data: any) => api.post('/assessment/submit', data),
    submitInterview: (data: any) => api.post('/interview/submit', data),
    getFinalResult: () => api.get('/result'),
};

export default api;
