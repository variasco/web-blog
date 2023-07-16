import { useCallback } from "react";
import CopyIcon from "shared/assets/icons/copy.svg";
import { classNames as cn } from "shared/lib";
import { Button, ButtonTheme } from "../Button/Button";
import styles from "./Code.module.scss";

export interface CodeProps {
  className?: string;
  text: string;
}

export const Code = (props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(styles.wrapper, {}, [className])}>
      <Button className={styles.copy} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <CopyIcon className={styles.icon} />
      </Button>
      <code className={styles.root}>{text}</code>
    </pre>
  );
};
