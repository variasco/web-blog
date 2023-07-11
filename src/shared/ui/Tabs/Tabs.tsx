import { ReactNode, useCallback } from "react";
import { classNames as cn } from "shared/lib";
import { Card, CardTheme } from "../Card/Card";
import styles from "./Tabs.module.scss";

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

export interface TabsProps<T extends string> {
  tabs: TabItem<T>[];
  value: T;
  onTabClick?: (tab: TabItem<T>) => void;
  className?: string;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, value, tabs, onTabClick } = props;

  const onClick = useCallback(
    (tabItem) => {
      return () => {
        onTabClick?.(tabItem);
      };
    },
    [onTabClick]
  );

  // console.log("tabs", tabs);
  // console.log("value", value);

  return (
    <div className={cn(styles.root, className)}>
      {tabs.map((tab) => (
        <Card
          onClick={onClick(tab)}
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.DEFAULT}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
