import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/profile", element: <MyProfile /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> }
    ],
  },
]);

export default router;
