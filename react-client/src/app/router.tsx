import React from "react";
import { createBrowserRouter } from "react-router";

import { HomePage } from "@/pages";

const LazyProductsPage = React.lazy(() => import('@/pages/products-page').then(module => ({ default: module.ProductsPage })))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/products",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyProductsPage />
      </React.Suspense>
    )
  }
])