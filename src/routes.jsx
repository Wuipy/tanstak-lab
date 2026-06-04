

import RootLayout from  "./Components/RootLayout";
import HomePage from "./Pages/HomePage";
import UsersPage from  "./Pages/UsersPage";
import LoginPage from "./Pages/LoginPage";

import {
     createRootRoute,
     createRoute,
     createRouter,
     createBrowserHistory } from "@tanstack/react-router";  

const rootRoute = createRootRoute({
    component: RootLayout,
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
}); 

const usersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/users",
    component: UsersPage,
}); 

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: LoginPage,
}); 

rootRoute.addChildren([
    homeRoute,
    usersRoute,
    loginRoute
]);


const router = createRouter({
    routeTree: rootRoute,
    history: createBrowserHistory(),
    defaultErrorComponent: () => <div>Something went wrong</div>,
});

export default router;
