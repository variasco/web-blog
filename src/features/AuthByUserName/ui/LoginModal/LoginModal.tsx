import { FC, Suspense } from "react";
import { classNames as cn } from "shared/lib";
import { Loader, Modal } from "shared/ui";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

export interface LoginModalProps {
  className?: string;
  open?: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, open, onClose } = props;

  return (
    <Modal className={cn("", {}, [className])} open={open} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
