import { use18Intl } from "../../helpers/hooks/use18Intl";

const EmptyList = () => {
  const { t } = use18Intl();

  return (
    <div className="empty_list">
      <img src="/no_data.jpg" alt="no data" />
      <span data-testid="no-data">{t("no-data")}</span>
    </div>
  );
};

export default EmptyList;
