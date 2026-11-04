import { useCallback, useEffect, useState } from "react";
import { Bill, BillItem } from "@/data/types";
import { API_BASE_URL, getAuthHeaders } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, X } from "lucide-react";
import { toast } from "sonner";

const API = `${API_BASE_URL}/api/bills`;
const today = () => new Date().toISOString().split("T")[0];
const emptyBill = () => ({ patientName: "", phone: "", date: today(), items: [] as BillItem[] });

const AdminBilling = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newBill, setNewBill] = useState(emptyBill);

  const loadBills = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(API, { headers: getAuthHeaders() });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.message ?? "Request failed");
      setBills(data);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to load bills");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadBills(); }, [loadBills]);

  const addItem = () => {
    setNewBill(prev => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 1, rate: 0, amount: 0 }],
    }));
  };

  const updateItem = (idx: number, field: keyof BillItem, value: string | number) => {
    setNewBill(prev => {
      const items = [...prev.items];
      items[idx] = { ...items[idx], [field]: value };
      items[idx].amount = items[idx].quantity * items[idx].rate;
      return { ...prev, items };
    });
  };

  const removeItem = (idx: number) => {
    setNewBill(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== idx) }));
  };

  const total = newBill.items.reduce((s, item) => s + item.amount, 0);

  const saveBill = async () => {
    if (!newBill.patientName || newBill.items.length === 0) {
      toast.error("Add patient name and at least one item");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getAuthHeaders() },
        body: JSON.stringify(newBill),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.message ?? "Failed to save bill");
      setBills(prev => [data, ...prev]);
      toast.success("Bill saved");
      setCreating(false);
      setNewBill(emptyBill());
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to save bill");
    } finally {
      setSaving(false);
    }
  };

  const deleteBill = async (id: string) => {
    if (!confirm("Delete this bill?")) return;
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE", headers: getAuthHeaders() });
      if (!res.ok) throw new Error("Failed to delete bill");
      setBills(prev => prev.filter(b => b.id !== id));
      toast.success("Bill deleted");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to delete bill");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground">Billing</h2>
        <Button onClick={() => setCreating(!creating)} className="rounded-full">
          {creating ? <><X size={16} className="mr-1" /> Cancel</> : <><Plus size={16} className="mr-1" /> New Bill</>}
        </Button>
      </div>

      {creating && (
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border mb-6">
          <h3 className="font-display text-lg font-semibold mb-4">Create New Bill</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div><Label>Patient Name</Label><Input value={newBill.patientName} onChange={e => setNewBill({ ...newBill, patientName: e.target.value })} /></div>
            <div><Label>Phone</Label><Input value={newBill.phone} onChange={e => setNewBill({ ...newBill, phone: e.target.value })} /></div>
            <div><Label>Date</Label><Input type="date" value={newBill.date} onChange={e => setNewBill({ ...newBill, date: e.target.value })} /></div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <Label>Bill Items</Label>
              <Button variant="outline" size="sm" onClick={addItem}><Plus size={14} className="mr-1" /> Add Item</Button>
            </div>
            {newBill.items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 mb-2 items-end">
                <div className="col-span-5">
                  <Input placeholder="Description" value={item.description} onChange={e => updateItem(idx, "description", e.target.value)} />
                </div>
                <div className="col-span-2">
                  <Input type="number" placeholder="Qty" value={item.quantity} onChange={e => updateItem(idx, "quantity", +e.target.value)} />
                </div>
                <div className="col-span-2">
                  <Input type="number" placeholder="Rate" value={item.rate} onChange={e => updateItem(idx, "rate", +e.target.value)} />
                </div>
                <div className="col-span-2 text-right font-medium text-foreground py-2">₹{item.amount}</div>
                <div className="col-span-1">
                  <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeItem(idx)}><Trash2 size={14} /></Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <p className="text-lg font-bold text-foreground">Total: ₹{total.toLocaleString()}</p>
            <Button onClick={saveBill} disabled={saving} className="rounded-full">{saving ? "Saving..." : "Save Bill"}</Button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {loading ? (
          <p className="py-6 text-center text-muted-foreground">Loading bills...</p>
        ) : bills.length === 0 ? (
          <p className="py-6 text-center text-muted-foreground">No bills yet.</p>
        ) : bills.map(bill => (
          <div key={bill.id} className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="font-semibold text-foreground">{bill.patientName}</p>
                <p className="text-xs text-muted-foreground">{bill.phone} • {bill.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-primary">₹{bill.total.toLocaleString()}</p>
                <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteBill(bill.id)}><Trash2 size={16} /></Button>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-2 text-muted-foreground font-medium">Item</th>
                  <th className="text-center py-2 text-muted-foreground font-medium">Qty</th>
                  <th className="text-right py-2 text-muted-foreground font-medium">Rate</th>
                  <th className="text-right py-2 text-muted-foreground font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {bill.items.map((item, i) => (
                  <tr key={i} className="border-b border-border/30">
                    <td className="py-2 text-foreground">{item.description}</td>
                    <td className="py-2 text-center text-muted-foreground">{item.quantity}</td>
                    <td className="py-2 text-right text-muted-foreground">₹{item.rate}</td>
                    <td className="py-2 text-right text-foreground">₹{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBilling;
