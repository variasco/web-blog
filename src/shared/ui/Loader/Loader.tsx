import { FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import "./Loader.scss";

export interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn("loadingio-spinner-dual-ring-66xs353738l", {}, [className])}>
      <div className="ldio-1tmaqjb5jgj">
        <div></div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
