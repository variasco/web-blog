import {
  FC,
  MouseEvent,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames as cn } from "shared/lib";
import { Portal } from "shared/ui";
import styles from "./Modal.module.scss";

export interface ModalProps {
  children?: ReactNode;
  className?: string;
  open?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, open, onClose, lazy } = props;
  const [closing, setClosing] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
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

  useEffect(() => {
    if (open) {
      setMounted(true);
    }
  }, [open]);

  if (lazy && !mounted) {
    return null;
  }

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
