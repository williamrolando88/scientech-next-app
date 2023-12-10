import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
