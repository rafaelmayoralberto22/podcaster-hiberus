import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import en from "../locales/en.json";
import { EntryEntity } from "../types/PodcastType";
import { flattenMessages } from "./global";

const languages = {
  en,
};

export const renderWithReactIntl = (component: JSX.Element) => {
  return render(
    <MemoryRouter>
      <IntlProvider
        messages={flattenMessages(languages["en"])}
        locale="es"
        defaultLocale="es"
      >
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
