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
import PrivateRouter from "../Components/PrivateRouter";
import TureDetails from "../Components/TureDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:5000/ture-limit"),
        Component: Home,
      },
      {
        path: "/allPackages",
        loader: () => fetch("http://localhost:5000/all-tures-cards"),
        Component: AllPackages,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRouter>
            <MyBookings></MyBookings>
          </PrivateRouter>
        ),
      },
      {
        path: "/ture-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/ture-details/${params.id}`),
        element: (
          <PrivateRouter>
            <TureDetails></TureDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/addPackage",
        element: (
          <PrivateRouter>
            <AddPackage></AddPackage>
          </PrivateRouter>
        ),
      },
      {
        path: "/myPackages",
        element: (
          <PrivateRouter>
            <MyPackages></MyPackages>
          </PrivateRouter>
        ),
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
