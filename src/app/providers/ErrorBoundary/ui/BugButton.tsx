import { ButtonHTMLAttributes, FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";

export interface BugButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const BugButton: FC<BugButtonProps> = (props) => {
  const { ...restProps } = props;

  const [error, setError] = useState(false);
  const { t } = useTranslation();

  function onThrow() {
    setError(true);
  }

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow} {...restProps}>
      {t("throw-error")}
    </Button>
  );
};
