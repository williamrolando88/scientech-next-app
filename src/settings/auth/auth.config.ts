import type { NextAuthConfig } from "next-auth";
import { ROUTES } from "../routes/appRoutes";

export const authConfig = {
  providers: [],
  pages: {
    signIn: ROUTES.public.login,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith(ROUTES.private.home);

      const isOnLogin = nextUrl.pathname.startsWith(ROUTES.public.login);

      if (isOnLogin && isLoggedIn) {
        return Response.redirect(new URL(ROUTES.private.home, nextUrl));
      }

      if (isOnDashboard) {
        return isLoggedIn;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
