import { PropsWithChildren } from "react";
import styled from "styled-components";
import { colors, ColorsType } from "../../constants/theme";
import Icon, { ArrowRight } from "../Icon";

type ButtonType = "outline" | "filled";

export interface ButtonProps {
  title?: string;
  onClick?: () => void;
  buttonType?: ButtonType;
  disabled?: boolean;
  width?: number;
  backgroundColor?: ColorsType;
  hasNextButton?: boolean;
}

// const getButtonSize = (type: ButtonType, disabled = false) => {
//   switch (type) {
//     case "outline":
//       return "";
//     case "filled":
//       return "";
//     default:
//       return "";
//   }
// };

const getTextColor = (type: ButtonType, disabled = false) => {
  switch (type) {
    case "outline":
      return disabled ? colors.GRAY3 : colors.WHITE;
    case "filled":
      return colors.BLACK;
    default:
      return colors.BLACK;
  }
};

const getBackgroundColor = (type: ButtonType, disabled = false) => {
  switch (type) {
    case "outline":
      return "transparent";
    case "filled":
      return disabled ? colors.GRAY3 : colors.WHITE;
    default:
      return colors.WHITE;
  }
};

const getBorderStyle = (type: ButtonType, disabled = false) => {
  switch (type) {
    case "outline":
      return `border: 1px solid ${disabled ? colors.GRAY3 : colors.WHITE}`;
    default:
      return "border-style: none";
  }
};

const Button = ({
  title,
  onClick,
  buttonType = "filled",
  disabled,
  width,
  hasNextButton,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      buttonType={buttonType}
      textColor={getTextColor(buttonType, disabled)}
      backgroundColor={getBackgroundColor(buttonType, disabled)}
      width={width}
      borderStyle={getBorderStyle(buttonType, disabled)}
      hasNextButton={hasNextButton}
      {...rest}
    >
      {title ? title : children}
      {hasNextButton ? (
        <Icon
          icon={ArrowRight}
          height={25}
          color={buttonType === "filled" ? colors.BLACK : colors.WHITE}
        />
      ) : null}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  buttonType: ButtonType;
  textColor: ColorsType;
  backgroundColor: string;
  width?: number;
  hasNextButton?: boolean;
  borderStyle: string;
}>`
  width: ${({ width }) => (width ? `${width / 10}rem` : "100%")};
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: ${({ hasNextButton }) =>
    hasNextButton ? "space-between" : "center"};
  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ theme }) => theme.typo.B2_SB};
  ${({ borderStyle }) => borderStyle};
  border-radius: 0.8rem;
`;

export default Button;
