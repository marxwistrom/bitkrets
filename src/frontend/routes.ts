import { HomePage } from "./pages/home";
import { DashboardPage } from "./pages/dashboard";
import { LoginPage } from "./pages/login";
import { PageNotFound } from "./pages/404";

type RouteEntry = {
  html: () => string;
  logic: () => void;
};

export type Routes = Record<string, RouteEntry>;

export const routes = {
  "404": PageNotFound(),
  "/": HomePage(),
  "/dashboard": DashboardPage(),
  "/login": LoginPage(),
} satisfies Routes;

export type pathNames = keyof typeof routes;
