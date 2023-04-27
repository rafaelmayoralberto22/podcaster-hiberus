import { createBrowserRouter } from "react-router-dom";
import Home from "./pages";
import Podcast from "./pages/podcast";
import Episode from "./pages/episode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "podcast/:podcastId",
    element: <Podcast />,
  },
  {
    path: "podcast/:podcastId/episode/:episodeId",
    element: <Episode />,
  },
]);

export default router;
