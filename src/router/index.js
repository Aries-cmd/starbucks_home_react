import { useRoutes } from "react-router-dom";

import Account from "../pages/account/Account";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Store from "../pages/store/Store";

function Router() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/store", element: <Store /> },
    { path: "/menu", element: <Menu /> },
    { path: "/account", element: <Account /> },
  ]);

  return routes;
}

export default Router;
