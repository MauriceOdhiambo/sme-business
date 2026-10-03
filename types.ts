export type Role = "owner" | "admin" | "manager" | "staff" | "member";

export type Product = {
  id: string; name: string; sku: string | null; category: string | null;
  selling_price: number; cost_price: number; stock_quantity: number; reorder_level: number;
};

export type Customer = {
  id: string; name: string; phone: string | null; email: string | null;
};

export type Invoice = {
  id: string; invoice_number: string; customer_id: string | null;
  total: number; status: string; due_date: string | null; created_at: string;
};
