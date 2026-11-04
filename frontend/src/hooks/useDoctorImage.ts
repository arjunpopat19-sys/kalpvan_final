import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/lib/api";
import staticDoctorImg from "@/assets/doctor.jpg";

const CACHE_KEY = "kalpvan_doctor_img_v2";

export const useDoctorImage = () => {
  const [doctorImg, setDoctorImg] = useState<string>(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("kalpvan_doctor_img");
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached && !cached.includes("doctor-1783166929588")) {
          return cached;
        }
      } catch (e) {
        // Ignore storage errors
      }
    }
    return staticDoctorImg;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/settings/homePageDoctorImage`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.value) {
            const fullUrl = `${API_BASE_URL}${data.value}`;
            const img = new Image();
            img.src = fullUrl;
            img.onload = () => {
              setDoctorImg(fullUrl);
              if (typeof window !== "undefined") {
                try {
                  localStorage.setItem(CACHE_KEY, fullUrl);
                } catch (e) {
                  // Ignore quota errors
                }
              }
            };
            img.onerror = () => {
              setDoctorImg(staticDoctorImg);
            };
          }
        }
      } catch (error) {
        setDoctorImg(staticDoctorImg);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, []);

  return { doctorImg, loading };
};
