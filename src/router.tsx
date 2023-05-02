import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./components/layouts/GeneralLayout";

const Home = lazy(() => import("./pages"));
const Podcast = lazy(() => import("./pages/podcast"));
const Episode = lazy(() => import("./pages/episode"));
const Page404 = lazy(() => import("./pages/404Page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/podcast/:podcastId",
        element: <Podcast />,
      },
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        element: <Episode />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
