export interface Plan {
  id: number | null;
  name: string | null;
  amount: number | null;
  interval: number | null;
  interval_type: "day" | "week" | "month" | "year" | null;
  stripe_id: string | null;
  trashed: boolean | null;
}
