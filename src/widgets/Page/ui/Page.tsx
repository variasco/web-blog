import { getScrollPositionByPath, scrollSaveActions } from "features/ScrollSave";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useRef,
} from "react";
import { useLocation } from "react-router-dom";
import { classNames as cn } from "shared/lib";
import { useAppDispatch, useInfiniteScroll, useInitialEffect, useThrottle } from "shared/lib/hooks";
import styles from "./Page.module.scss";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";

export interface PageProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  onScrollEnd?: () => void;
  children?: ReactNode;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, pathname)
  );

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  return (
    <main className={cn(styles.root, className)} ref={wrapperRef} onScroll={onScroll}>
      {children}
      {onScrollEnd ? <div ref={triggerRef} /> : null}
    </main>
  );
};
