import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/Default";

// pages
import Home from "@pages/Home";
import DatePicker from "@pages/DatePicker";
import File from "@pages/File";
import Csv from "./pages/Csv";
import List from "./pages/List";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/datepicker", element: <DatePicker /> },
      { path: "/file", element: <File /> },
      { path: "/csv", element: <Csv /> },
      { path: "/list", element: <List /> },
    ],
  },
] as RouteObject[]);

export default function Router() {
  return <RouterProvider router={router} />;
}
