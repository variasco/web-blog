import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Portal } from "shared/ui";
import styles from "./Modal.module.scss";

export interface ModalProps {
  children?: ReactNode;
  className?: string;
  open?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, open, onClose } = props;
  const [closing, setClosing] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const TIMER_DELAY = 200;

  const closeHandler = useCallback(() => {
    if (onClose) {
      setClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setClosing(false);
      }, TIMER_DELAY);
    }
  }, [onClose]);

  const contentClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", keyDownHandler);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [open, keyDownHandler]);

  return (
    <Portal>
      <div
        className={cn(
          styles.root,
          {
            [styles.opened]: open,
            [styles.closing]: closing,
          },
          [className]
        )}
      >
        <div onMouseDown={closeHandler} className={styles.overlay}>
          <div onMouseDown={contentClickHandler} className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
