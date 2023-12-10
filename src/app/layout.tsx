import ThemeRegistry from "@/settings/theme/wrappers/ThemeRegistry";
import { ReactNode } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import "simplebar-react/dist/simplebar.min.css";

export const metadata = {
  title: "Public page",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
