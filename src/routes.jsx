import RootLayout from "./Components/RootLayout";
import HomePage from "./Pages/HomePage";
import UsersPage from "./Pages/UsersPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import PrivateRoute from "./Components/PrivateRoute";
import AdminRoute from "./Components/AdminRoute";

import {
  createRootRoute,
  createRoute,
  createRouter,
  createBrowserHistory,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  component: PrivateRoute,
});

const usersRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/users",
  component: UsersPage,
});

const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "admin-layout",
  component: AdminRoute,
});

const adminRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "/admin",
  component: AdminPage,
});

rootRoute.addChildren([
  homeRoute,
  loginRoute,
  protectedRoute,
  usersRoute,
  adminLayoutRoute,
  adminRoute,
]);

const router = createRouter({
  routeTree: rootRoute,
  history: createBrowserHistory(),
  defaultErrorComponent: () => <div>Something went wrong</div>,
});

export default router;
