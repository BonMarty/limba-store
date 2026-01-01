import React from "react";
import { createBrowserRouter } from "react-router";

import { AuthPage, ProductsPage } from "@/pages";
import { routes } from "@/shared/routes";
import { FullscreenLoader } from "@/shared/ui";

const LazyProfilePage = React.lazy(() => import("@/pages/profile-page").then((module) => ({ default: module.ProfilePage })))

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <ProductsPage />
  },
  {
    path: routes.PROFILE.path,
    element: (
      <React.Suspense fallback={<FullscreenLoader />}>
        <LazyProfilePage />
      </React.Suspense>
    )
  },
  {
    path: routes.AUTH.path,
    element: <AuthPage />
  }
])