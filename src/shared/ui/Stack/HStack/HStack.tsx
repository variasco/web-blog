import { Flex, FlexProps } from "../Flex/Flex";

export type HStackProps = Omit<FlexProps, "direction">;

export const HStack = (props: HStackProps) => {
  const { align = "center", ...otherProps } = props;
  return <Flex {...otherProps} direction="row" align={align} />;
};
