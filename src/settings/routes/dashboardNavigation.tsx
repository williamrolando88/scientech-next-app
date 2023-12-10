import { NavData } from "@/components/shared/nav-section";
import { ICONS } from "@/lib/constants/icons";
import { ROUTES } from "./appRoutes";

const navConfig: NavData[] = [
  {
    subheader: "general",
    items: [
      { title: "Resumen", path: ROUTES.private.home, icon: ICONS.dashboard },
      {
        title: "Calcular Importación",
        path: ROUTES.private.calculator.index,
        icon: ICONS.file,
      },
    ],
  },
];

export default navConfig;
