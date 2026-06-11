import { ZeroFestApiResponse } from "@/types/detection";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function fetchZeroFestData(): Promise<ZeroFestApiResponse> {
  const res = await fetch(`${API_BASE}/api/events/zerofest`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
