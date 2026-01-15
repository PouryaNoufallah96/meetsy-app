"use client";
import { useQuery } from "@tanstack/react-query";

export default function DashboardPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["communities"],
    queryFn: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([{ id: 1, name: "Community 1" }]);
        }, 1000);
      });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      {data &&
        data.map((community: { id: number; name: string }) => (
          <div key={community.id}>{community.name}</div>
        ))}
    </div>
  );
}
