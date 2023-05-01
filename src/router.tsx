import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./components/layouts/GeneralLayout";
import { PodcastEpisodeContextProvider } from "./helpers/contexts/PodcastEpisodeContext";

const Home = lazy(() => import("./pages"));
const PodcastInfo = lazy(() => import("./components/podcast/PodcastInfo"));
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
        element: (
          <PodcastEpisodeContextProvider>
            <PodcastInfo>
              <Podcast />
            </PodcastInfo>
          </PodcastEpisodeContextProvider>
        ),
      },
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        element: (
          <PodcastEpisodeContextProvider>
            <PodcastInfo>
              <Episode />
            </PodcastInfo>
          </PodcastEpisodeContextProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
