import { createBrowserRouter, RouteObject } from "react-router-dom";
import CardsListItemPage from "../pages/CardsListItemPage";
import App from "../App";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:cardId',
    element: <CardsListItemPage />,
  }
]

export const router = createBrowserRouter(routes)