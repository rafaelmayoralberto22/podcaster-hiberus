import { useIntl } from "react-intl";

export const use18Intl = () => {
  const { formatMessage } = useIntl();
  const t = (key: string, defaultValue?: string, value?: any) =>
    formatMessage({
      id: key,
      defaultMessage: defaultValue,
      description: value,
    });

  return { t };
};
