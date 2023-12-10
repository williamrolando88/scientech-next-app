import { ROUTES } from "@/settings/routes/appRoutes";
import { Button } from "@mui/material";
import Link from "next/link";

function page() {
  return (
    <main>
      List of calculations
      <Link href={ROUTES.private.calculator.new}>
        <Button>Nuevo</Button>
      </Link>
    </main>
  );
}

export default page;
