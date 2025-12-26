import { createBrowserRouter } from "react-router";

import { AuthPage, ProductsPage } from "@/pages";
import { routes } from "@/shared/routes";

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <ProductsPage />
  },
  {
    path: routes.AUTH.path,
    element: <AuthPage />
  }
])