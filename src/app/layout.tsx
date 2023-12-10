import ThemeRegistry from "@/settings/theme/wrappers/ThemeRegistry";
import { Metadata } from "next";
import { ReactNode } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Scientech Ecuador",
    default: "Scientech Ecuador",
  },
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
