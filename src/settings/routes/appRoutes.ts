import { pathCreator } from "@/lib/helpers/pathCreator";

const DASHBOARD = "/dashboard";
const CALCULATOR = "/import-calculator";

export const ROUTES = {
  public: {
    root: "/",
    login: process.env.NODE_ENV === "development" ? "/login" : "https://app.scientech-ec.com/login",
    products: "/products",
    contact: "/contact",
    termsAndConditions: "/terminos-y-condiciones",
    privacyPolicy: "/politica-de-privacidad",
  },
  private: {
    root: DASHBOARD,
    home: pathCreator(DASHBOARD, "/home"),
    xmlParser: pathCreator(DASHBOARD, "/xml-parser"),
    calculator: {
      index: pathCreator(DASHBOARD, CALCULATOR),
      new: pathCreator(DASHBOARD, CALCULATOR, "/new"),
    },
    starred: pathCreator(DASHBOARD, "/starred"),
    tasks: pathCreator(DASHBOARD, "/tasks"),
  },
};
