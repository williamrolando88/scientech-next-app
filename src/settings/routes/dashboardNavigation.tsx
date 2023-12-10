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
      { title: "Starred", path: ROUTES.private.starred, icon: ICONS.blog },
      { title: "Tasks", path: ROUTES.private.tasks, icon: ICONS.blog },
    ],
  },
  // Nested category example:
  //
  // {
  //   subheader: "management",
  //   items: [
  //     {
  //       title: "user",
  //       path: PATH_DASHBOARD.user.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: "Four", path: PATH_DASHBOARD.user.four },
  //         { title: "Five", path: PATH_DASHBOARD.user.five },
  //         { title: "Six", path: PATH_DASHBOARD.user.six },
  //       ],
  //     },
  //   ],
  // },
];

export default navConfig;
