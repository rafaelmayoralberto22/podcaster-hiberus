import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Suspense } from "react";
import { IntlProvider } from "react-intl";
import { SkeletonTheme } from "react-loading-skeleton";
import "./assets/styles/global.scss";
import { RouterLoading } from "./components/loading/RouterLoading";
import { GlobalStoreContextProvider } from "./helpers/contexts/GlobalStoreContext";
import { createIDBPersister } from "./helpers/services/idbPersister";
import en from "./locales/en.json";
import Router from "./router";

const languages = {
  en,
};

const persister = createIDBPersister();

const time = 1000 * 60 * 60 * 24; // 24 hours

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: time,
        cacheTime: time,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <IntlProvider messages={languages["en"]} locale="en" defaultLocale="en">
      <SkeletonTheme
        baseColor="#e0e0e0"
        highlightColor="#bdbdbd"
        duration={3.5}
      >
        <Suspense fallback={<RouterLoading />}>
          <GlobalStoreContextProvider>
            <PersistQueryClientProvider
              client={queryClient}
              persistOptions={{ persister }}
            >
              <Router />
            </PersistQueryClientProvider>
          </GlobalStoreContextProvider>
        </Suspense>
      </SkeletonTheme>
    </IntlProvider>
  );
};

export default App;
