import { FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";

export interface LoginModalProps {
  className?: string;
  open?: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, open, onClose } = props;

  return (
    <Modal 
      className={cn("", {}, [className])}
      open={open}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
