import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Suspense } from "react";
import { IntlProvider } from "react-intl";
import { SkeletonTheme } from "react-loading-skeleton";
import "./assets/styles/global.scss";
import { RouterLoading } from "./components/commons/loading/RouterLoading";
import { queryClient } from "./helpers/services/clientQuery";
import { createIDBPersister } from "./helpers/services/idbPersister";
import en from "./locales/en.json";
import Router from "./router";

const languages = {
  en,
};

const persister = createIDBPersister();

const App = () => {
  return (
    <IntlProvider messages={languages["en"]} locale="en" defaultLocale="en">
      <SkeletonTheme
        baseColor="#e0e0e0"
        highlightColor="#bdbdbd"
        duration={3.5}
      >
        <Suspense fallback={<RouterLoading />}>
          <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister }}
          >
            <Router />
          </PersistQueryClientProvider>
        </Suspense>
      </SkeletonTheme>
    </IntlProvider>
  );
};

export default App;
