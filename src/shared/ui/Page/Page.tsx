import { classNames as cn } from "shared/lib";
import styles from "./Page.module.scss";
import { DetailedHTMLProps, HTMLAttributes, MutableRefObject, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks";

export interface PageProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  return (
    <section ref={wrapperRef} className={cn(styles.root, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
