import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminLayout, ProductLayout, WebLayout } from "../components/layouts";
import {
  AboutUsPage,
  CartPage,
  ContactUsPage,
  HomePage,
  InventoryPage,
  NotFoundPage,
  OrderPage,
  PaymentResultPage,
  ProductCategoryPage,
  ProductsPage,
  SingleProductPage,
  UserLoginPage,
  UserProfilePage,
  UserSignupPage,
  ShippingPage,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/shipping",
        element: <ShippingPage />,
      },
      {
        path: "/payment",
        element: <PaymentResultPage />,
      },
      {
        path: "/profile",
        element: <UserProfilePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard/inventory",
        element: <InventoryPage />,
      },
      {
        path: "/admin/dashboard/order",
        element: <OrderPage />,
      },
      {
        path: "/admin/dashboard/product",
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <UserLoginPage />,
  },
  { path: "/signup", element: <UserSignupPage /> },
  {
    element: <ProductLayout />,
    children: [
      {
        path: "/products/category/:category",
        element: <ProductCategoryPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
