"use client";

import { useState, useEffect } from "react";
import type { DriverStanding } from "@/types";

export function useDriverStandings() {
  const [data, setData] = useState<DriverStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/standings/drivers")
      .then((r) => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
