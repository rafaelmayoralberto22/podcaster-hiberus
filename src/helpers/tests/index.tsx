import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import en from "../../locales/en.json";
import { HomeData } from "../../types/HomeListProps";
import { Episode } from "../../types/PodcastEpisodesListProps";

const languages = {
  en,
};

export const renderWithReactIntl = (component: JSX.Element) => {
  return render(
    <MemoryRouter>
      <IntlProvider messages={languages["en"]} locale="es" defaultLocale="es">
        {component}
      </IntlProvider>
    </MemoryRouter>
  );
};

export const item: HomeData = {
  label: "Data",
  author: "TEST",
  img: "imge.jpg",
  id: "iidid-8978",
  url: "podcast/iidid-8978",
};

export const episodes: Episode[] = [
  {
    episodeId: "1",
    title: "Title 1",
    date: "2/12/2023",
    description: "My description 1",
    duration: "00:99",
    link: "podcast/1",
    url: "http://link.com",
  },
  {
    episodeId: "2",
    title: "Title 2",
    date: "2/12/2023",
    description: "My description 2",
    duration: "00:99",
    link: "podcast/2",
    url: "http://link.com",
  },
];
