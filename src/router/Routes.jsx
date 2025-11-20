import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/profile", element: <MyProfile /> },
    ],
  },
]);

export default router;
