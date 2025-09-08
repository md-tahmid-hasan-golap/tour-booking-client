import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import AllPackages from "../Components/AllPackages";
import MyBookings from "../Components/MyBookings";
import About from "../Components/About";
import AddPackage from "../Components/AddPackage";
import MyPackages from "../Components/MyPackages";
import Login from "../Components/Login";
import Register from "../Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allPackages",
        Component: AllPackages,
      },
      {
        path: "/myBookings",
        Component: MyBookings,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/addPackage",
        Component: AddPackage,
      },
      {
        path: "/Packages",
        Component: MyPackages,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
