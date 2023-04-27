import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import es from "../locales/es.json";
import { flattenMessages } from "./global";

const languages = {
  es,
};

export const renderWithReactIntl = (component: JSX.Element) => {
  return render(
    <IntlProvider
      messages={flattenMessages(languages["es"])}
      locale="es"
      defaultLocale="es"
    >
      {component}
    </IntlProvider>
  );
};
