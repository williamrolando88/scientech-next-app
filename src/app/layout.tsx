import ThemeRegistry from "@/settings/theme/wrappers/ThemeRegistry";
import { ReactNode } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <DashboardLayout>{children}</DashboardLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
