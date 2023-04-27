import { Link } from "react-router-dom";
import { use18Intl } from "../../../helpers/hooks/use18Intl";

const HeaderLogo = () => {
  const { t } = use18Intl();

  return (
    <Link to="/" className="header_logo">
      {t("logo")}
    </Link>
  );
};

export default HeaderLogo;
