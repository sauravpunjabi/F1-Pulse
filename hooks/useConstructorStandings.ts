"use client";

import { useState, useEffect } from "react";
import type { ConstructorStanding } from "@/types";

export function useConstructorStandings() {
  const [data, setData] = useState<ConstructorStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/standings/constructors")
      .then((r) => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
