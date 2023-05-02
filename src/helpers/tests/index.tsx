import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import en from "../../locales/en.json";
import { Episode } from "../../types/PodcastEpisodesListProps";
import { EntryEntity } from "../../types/PodcastType";

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

export const item: EntryEntity = {
  "im:name": {
    label: "Test 1",
  },
  id: {
    label: "1234",
    attributes: {
      "im:id": "12345",
    },
  },
  "im:artist": {
    label: "Artist Tets 1",
  },
  "im:image": [
    {
      label: "http://image.com",
      attributes: { height: "55" },
    },
  ],
  "im:price": {
    label: "$12.99",
    attributes: {
      amount: "12.99",
      currency: "jjh",
    },
  },
  "im:contentType": {
    attributes: {
      label: "tsd",
      term: "here",
    },
  },
  "im:releaseDate": {
    label: "date",
    attributes: {
      label: new Date().toString(),
    },
  },
  summary: {
    label: "dsd",
  },
  link: {
    attributes: {
      href: "http://sd.com",
      rel: "type",
      type: "url",
    },
  },
  category: {
    attributes: {
      "im:id": "213",
      label: "String",
      scheme: "tupe scheme",
      term: "term",
    },
  },
  title: {
    label: "Title",
  },
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
