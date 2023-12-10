import ThemeRegistry from "@/settings/theme/wrappers/ThemeRegistry";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import SupportIcon from "@mui/icons-material/Support";
import { ReactNode } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export const DRAWER_WIDTH = 240;

export const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "Tasks", href: "/tasks", icon: ChecklistIcon },
];

export const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

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
