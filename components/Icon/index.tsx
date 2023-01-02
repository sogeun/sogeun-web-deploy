import React from "react";
import { ColorsType } from "../../constants/theme";

interface IconProps extends IconComponentProps {
  icon: React.FC<IconComponentProps>;
  width?: number;
  height?: number;
  fill?: ColorsType;
}

const Icon = ({ icon: IconComponent, ...props }: IconProps) => {
  return <IconComponent {...props} />;
};

// Icon들
export interface IconComponentProps {
  width?: number;
  height?: number;
  color?: ColorsType;
}

type SVGProps = React.SVGProps<SVGSVGElement>;

const withSVGProps =
  (
    Component: React.FC<SVGProps>,
    colorType: "fill" | "stroke" | "fill-stroke" | "fixed" = "stroke"
  ) =>
  ({ width = 24, height = 24, color }: IconComponentProps) => {
    const colorProps = {
      fill: colorType === "fill" ? color : "none",
      stroke: colorType === "stroke" ? color : "none",
    };
    return (
      <Component
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        shapeRendering="geometricPrecision"
        xmlns="http://www.w3.org/2000/svg"
        {...colorProps}
      />
    );
  };

export const ArrowRight = withSVGProps((props) => (
  <svg {...props}>
    <path d="M18.525 12.0787H2.5V11.5787H18.525H19.7321L18.8786 10.7252L15.403 7.24958L15.7542 6.89L20.6929 11.8287L15.7542 16.7674L15.403 16.4078L18.8786 12.9323L19.7321 12.0787H18.525Z" />
  </svg>
));

export default Icon;
