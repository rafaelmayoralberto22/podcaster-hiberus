import { Link } from "react-router-dom";
import { use18Intl } from "../helpers/hooks/use18Intl";

const Page404 = () => {
  const { t } = use18Intl();

  return (
    <div className="page-404">
      <h1>404</h1>
      <p>{t("page_you_are_looking_for_does_not_exist")}</p>
      <Link to={"/"}>{t("back_to_home_page")}</Link>
    </div>
  );
};

export default Page404;
