import api from './api';

// ICD API functions
export const fetchICDMappings = async () => {
  try {
    const response = await api.get('/icd/mappings');
    console.log('Fetched ICD mappings:', response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error('Error fetching ICD mappings:', error);
    throw error;
  }
};

export const searchICDMappings = async (query) => {
  try {
    const response = await api.get('/icd/search', {
      params: { q: query }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching ICD mappings:', error);
    throw error;
  }
};

export const fetchMappingsBySystem = async (system) => {
  try {
    const response = await api.get(`/icd/system/${system}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mappings by system:', error);
    throw error;
  }
};

export default {
  fetchICDMappings,
  searchICDMappings,
  fetchMappingsBySystem
};