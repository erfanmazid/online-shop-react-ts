import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminLayout, WebLayout } from "../components/layouts";
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
  ShippingPage,
  SingleProductPage,
  UserLoginPage,
  UserProfilePage,
  UserSignupPage,
} from "../pages";
import OrderResult from "../pages/orderResult/inexd";

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
      {
        path: "/products/:category",
        element: <ProductCategoryPage />,
      },
      {
        path: "/order-result/:status",
        element: <OrderResult />,
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
  // {
  //   element: <ProductLayout />,
  //   children: [
  //     {
  //       path: "/products/:category",
  //       element: <ProductCategoryPage />,
  //     },
  //   ],
  // },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
