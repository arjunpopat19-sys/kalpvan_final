import { useState, useEffect } from 'react';
import { Treatment, treatments as defaultTreatments } from '../data/treatments';
import { API_BASE_URL } from '../lib/api';

const API_URL = `${API_BASE_URL}/api/treatments`;
const CACHE_KEY = 'kalpvan_treatments_cache';

export const useTreatments = () => {
  // Initialize synchronously with cached Atlas data or fresh static data — zero glitch
  const [treatments, setTreatments] = useState<Treatment[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        // Ignore JSON error
      }
    }
    return defaultTreatments;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTreatments = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch treatments');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setTreatments(data);
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(data));
          } catch (e) {
            // Ignore quota errors
          }
        }
      }
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTreatments();
  }, []);

  return { treatments, loading, error, refetch: fetchTreatments };
};
