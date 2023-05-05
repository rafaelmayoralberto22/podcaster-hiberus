import { Suspense } from "react";
import { IntlProvider } from "react-intl";
import { SkeletonTheme } from "react-loading-skeleton";
import "./assets/styles/global.scss";
import { RouterLoading } from "./components/loading/RouterLoading";
import en from "./locales/en.json";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStoreContextProvider } from "./helpers/contexts/GlobalStoreContext";

const languages = {
  en,
};

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
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
            <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
          </GlobalStoreContextProvider>
        </Suspense>
      </SkeletonTheme>
    </IntlProvider>
  );
};

export default App;
