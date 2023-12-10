import { ROUTES } from "@/settings/routes/appRoutes";
import { Button } from "@mui/material";
import Link from "next/link";

function page() {
  return (
    <main>
      <h1>Welcome to new next app</h1>

      <Link href={ROUTES.public.login}>
        <Button>Login</Button>
      </Link>
    </main>
  );
}

export default page;
