import React from "react";
import { ColorsType } from "../../constants/theme";

export interface IconComponentProps {
  size?: number;
  color?: ColorsType;
}

type SVGProps = React.SVGProps<SVGSVGElement>;

const withSVGProps =
  (
    Component: React.FC<SVGProps>,
    colorType: "fill" | "stroke" | "fill-stroke" | "fixed" = "fill"
  ) =>
  ({ size, color }: IconComponentProps) => {
    const colorProps =
      colorType === "fixed"
        ? { fill: "none", stroke: "none" }
        : {
            fill: colorType === "fill" ? color : "none",
            stroke: colorType === "stroke" ? color : "none",
          };
    return (
      <Component
        width={size}
        height={size}
        viewBox="0 0 24 24"
        shapeRendering="geometricPrecision"
        xmlns="http://www.w3.org/2000/svg"
        {...colorProps}
      />
    );
  };

export const ArrowRight = withSVGProps((props) => (
  <svg {...props}>
    <g clip-path="url(#clip0_900_578)">
      <path
        d="M18.525 12.0787H2.5V11.5787H18.525H19.7321L18.8786 10.7252L15.403 7.24958L15.7542 6.89L20.6929 11.8287L15.7542 16.7674L15.403 16.4078L18.8786 12.9323L19.7321 12.0787H18.525Z"
        fill="#121212"
        stroke="#121212"
      />
    </g>
    <defs>
      <clipPath id="clip0_900_578">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.178711)"
        />
      </clipPath>
    </defs>
  </svg>
));
