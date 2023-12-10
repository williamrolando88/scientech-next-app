import { DashboardLayout } from "@/components/DashboardLayout";
import { ReactNode } from "react";

export const metadata = {
  title: "Protected page",
  description: "Next.js App Router + Material UI v5",
};

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
