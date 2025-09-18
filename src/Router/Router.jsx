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
import UpdateTure from "../Components/UpdateTure";
import ErrorPage from "../Components/ErrorPage";
import BookingFrom from "../Components/BookingFrom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://server-side-kappa-jet.vercel.app/ture-limit"),
        Component: Home,
      },
      {
        path: "/allPackages",
        loader: () =>
          fetch("https://server-side-kappa-jet.vercel.app/all-tures-cards"),
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
        path: "/bookingFrom",
        // loader: ({ params }) =>
        //   fetch(`https://server-side-kappa-jet.vercel.app/ture-details/${params.id}`),
        element: (
          <PrivateRouter>
            <BookingFrom></BookingFrom>
          </PrivateRouter>
        ),
      },
      {
        path: "/ture-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://server-side-kappa-jet.vercel.app/ture-details/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <TureDetails></TureDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateTure/:id",
        loader: ({ params }) =>
          fetch(
            `https://server-side-kappa-jet.vercel.app/ture-details/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <UpdateTure></UpdateTure>
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
