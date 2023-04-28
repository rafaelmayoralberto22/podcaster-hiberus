import { Suspense } from "react";
import { IntlProvider } from "react-intl";
import { SkeletonTheme } from "react-loading-skeleton";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/global.scss";
import { RouterLoading } from "./components/loading/RouterLoading";
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
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#bdbdbd" duration={3.5}>
        <Suspense fallback={<RouterLoading />}>
          <RouterProvider router={router} fallbackElement={<RouterLoading />} />
        </Suspense>
      </SkeletonTheme>
    </IntlProvider>
  );
};

export default App;
