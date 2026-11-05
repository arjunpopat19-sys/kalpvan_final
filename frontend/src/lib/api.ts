export const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

export const getAuthToken = () => {
  const token = localStorage.getItem("kalpvan_token");
  if (!token) return null;
  return token.replace(/^["']|["']$/g, '');
};

export const getAuthHeaders = (): Record<string, string> => {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getMediaUrl = (url?: string) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")) {
    return url;
  }
  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  return `${API_BASE_URL}${cleanPath}`;
};

export const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("kalpvan_token");
      localStorage.removeItem("kalpvan_user");
    }
    const payload = await response.json().catch(() => null);
    throw new Error(payload?.message ?? "Request failed");
  }
  return response.json();
};
