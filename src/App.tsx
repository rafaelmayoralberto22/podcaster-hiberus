import { IntlProvider } from "react-intl";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/global.scss";
import { flattenMessages } from "./helpers/global";
import es from "./locales/es.json";
import router from "./router";

const languages = {
  es,
};

const App = () => {
  return (
    <IntlProvider
      messages={flattenMessages(languages["es"])}
      locale="es"
      defaultLocale="es"
    >
      <RouterProvider router={router} />
    </IntlProvider>
  );
};

export default App;
