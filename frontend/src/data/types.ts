export interface Appointment {
  id: string;
  patientName: string;
  email: string;
  phone: string;
  treatment: string;
  date: string;
  time: string;
  status: "pending" | "approved" | "rejected";
  message?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Review {
  id: string;
  patientName: string;
  treatment: string;
  rating: number;
  text: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BillItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Bill {
  id: string;
  patientName: string;
  phone: string;
  date: string;
  items: BillItem[];
  total: number;
}
