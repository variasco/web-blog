import { classNames as cn } from "shared/lib";
import styles from "./ArticleViewSwitcher.module.scss";
import { ArticleView } from "entities/Article";
import TilesIcon from "shared/assets/icons/tiles.svg";
import ListIcon from "shared/assets/icons/list.svg";
import { Button, Icon, ThemeButton } from "shared/ui";

export interface ArticleViewSwitcherProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILES,
    icon: TilesIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSwitcher = (props: ArticleViewSwitcherProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

  return (
    <div className={cn(styles.root, {}, [className])}>
      {viewTypes.map((item) => (
        <Button
          theme={ThemeButton.CLEAR}
          key={item.view}
          onClick={onClick(item.view)}
        >
          <Icon className={cn("", { [styles.notSelected]: item.view !== view })} Svg={item.icon} />
        </Button>
      ))}
    </div>
  );
};