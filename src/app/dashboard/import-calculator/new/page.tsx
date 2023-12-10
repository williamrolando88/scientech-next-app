import ImportCalculator from "@/components/ImportCalculator/Calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calcular Importación",
};

function page() {
  return (
    <main>
      <ImportCalculator />
    </main>
  );
}

export default page;
