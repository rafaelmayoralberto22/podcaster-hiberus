import { IntlProvider } from "react-intl";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/global.scss";
import { flattenMessages } from "./helpers/global";
import en from "./locales/en.json";
import router from "./router";

const languages = {
  en,
};

const App = () => {
  return (
    <IntlProvider
      messages={flattenMessages(languages["en"])}
      locale="es"
      defaultLocale="es"
    >
      <RouterProvider router={router} fallbackElement={<>loading</>} />
    </IntlProvider>
  );
};

export default App;
