import { NavData } from "@/components/shared/nav-section";
import SvgColor from "@/components/shared/svg-color";
import { ROUTES } from "./appRoutes";

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: icon("ic_blog"),
  cart: icon("ic_cart"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
};

const navConfig: NavData[] = [
  {
    subheader: "general",
    items: [
      { title: "Home", path: ROUTES.private.home, icon: ICONS.dashboard },
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
