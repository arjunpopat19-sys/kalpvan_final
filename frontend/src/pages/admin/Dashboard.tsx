import { useEffect, useMemo, useState } from "react";
import { CalendarCheck, Users, IndianRupee, Package } from "lucide-react";
import { Appointment, Bill } from "@/data/types";
import { API_BASE_URL, getAuthHeaders, getAuthToken } from "@/lib/api";
import { toast } from "sonner";

const LOW_STOCK_AT = 10; // same threshold as the Stock page

const getJson = async (path: string) => {
  const response = await fetch(`${API_BASE_URL}${path}`, { headers: getAuthHeaders() });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.message ?? `Unable to load ${path}`);
  }
  return Array.isArray(payload) ? payload : [];
};

const Dashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [bills, setBills] = useState<Bill[]>([]);
  const [patientCount, setPatientCount] = useState(0);
  const [lowStockCount, setLowStockCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const token = getAuthToken();
      if (!token) {
        toast.error("Please log in as admin to view live stats.");
        setLoading(false);
        return;
      }
      try {
        const [appts, billList, medicines, patients] = await Promise.all([
          getJson("/api/appointments"),
          getJson("/api/bills"),
          getJson("/api/medicines"),
          getJson("/api/patients"),
        ]);
        setAppointments(appts as Appointment[]);
        setBills(billList as Bill[]);
        setPatientCount(patients.length);
        setLowStockCount(medicines.filter(m => (m.stockQuantity || 0) <= LOW_STOCK_AT).length);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to load dashboard";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const stats = useMemo(() => ([
    {
      label: "Total Appointments",
      value: loading ? "…" : appointments.length,
      icon: CalendarCheck,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Total Patients",
      value: loading ? "…" : patientCount,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Revenue",
      value: loading ? "…" : `₹${bills.reduce((s, b) => s + b.total, 0).toLocaleString()}`,
      icon: IndianRupee,
      color: "bg-amber-100 text-amber-600",
    },
    {
      label: "Low Stock Items",
      value: loading ? "…" : lowStockCount,
      icon: Package,
      color: "bg-red-100 text-red-600",
    },
  ]), [appointments, bills, patientCount, lowStockCount, loading]);

  const recentAppointments = appointments.slice(0, 6);

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${s.color}`}>
                <s.icon size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">Recent Appointments</h3>
        <div className="overflow-auto">
          {loading ? (
            <p className="py-6 text-center text-muted-foreground">Loading appointments...</p>
          ) : recentAppointments.length === 0 ? (
            <p className="py-6 text-center text-muted-foreground">No appointments yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Patient</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Treatment</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Date</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.map(a => (
                  <tr key={a.id} className="border-b border-border/50">
                    <td className="py-3 px-2 text-foreground">{a.patientName}</td>
                    <td className="py-3 px-2 text-foreground">{a.treatment}</td>
                    <td className="py-3 px-2 text-muted-foreground">{a.date}</td>
                    <td className="py-3 px-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        a.status === "approved" ? "bg-primary/10 text-primary" :
                        a.status === "rejected" ? "bg-destructive/10 text-destructive" :
                        "bg-amber-100 text-amber-700"
                      }`}>{a.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
