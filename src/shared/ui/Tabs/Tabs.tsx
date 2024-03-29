import { ReactNode, useCallback } from "react";
import { classNames as cn } from "shared/lib";
import { Card } from "../Card/Card";
import { HStack } from "../Stack/HStack/HStack";
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
    (tabItem: TabItem<T>) => {
      return () => {
        onTabClick?.(tabItem);
      };
    },
    [onTabClick]
  );

  return (
    <HStack gap="8" className={cn(className)}>
      {tabs.map((tab) => (
        <Card
          className={styles.tab}
          onClick={onClick(tab)}
          theme={tab.value === value ? "outlined" : "default"}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
};
