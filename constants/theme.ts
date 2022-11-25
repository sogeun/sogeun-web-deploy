export type HeadingTypoType =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "heading7";

export type SubTitleTypoType = "subtitle1" | "subtitle2";

export type BodyTypoType = "body1" | "body2" | "body3" | "body4";

export type FontSizeType = HeadingTypoType | SubTitleTypoType | BodyTypoType;

export const fontWeights = {
  REGULAR: 400,
  BOLD: 700,
};

export enum FontType {
  NOTO_SANS_CJK_KR = "NotoSansCJK-KR",
}

export type FontWeightType = typeof fontWeights[keyof typeof fontWeights];

const getTypo = (size: FontSizeType, weight: FontWeightType) => {
  const { fontSize, lineHeight, fontWeight } = getFontTypo(size, weight);
  return `font-size: ${fontSize}rem; line-height: ${lineHeight}rem; font-weight: ${fontWeight}`;
};

const getFontTypo: (
  size: FontSizeType,
  weight: FontWeightType
) => {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
} = (size, weight) => {
  const fontWeight = weight;
  let fontSize = 1.6;
  let lineHeight = 2.4;
  switch (size) {
    case "heading1":
      fontSize = 3;
      lineHeight = 4;
      break;
    case "heading2":
      fontSize = 2.8;
      lineHeight = 3.8;
      break;
    case "heading3":
      fontSize = 2.4;
      lineHeight = 3.2;
      break;
    case "subtitle1":
      fontSize = 2;
      lineHeight = 2.8;
      break;
    case "subtitle2":
      fontSize = 1.8;
      lineHeight = 2.6;
      break;
    case "body1":
      fontSize = 1.6;
      lineHeight = 2.4;
      break;
    case "body2":
      fontSize = 1.4;
      lineHeight = 2.4;
      break;
    case "body3":
      fontSize = 1.2;
      lineHeight = 2;
      break;
    default:
      break;
  }
  return { fontSize, lineHeight, fontWeight };
};

const colors = {
  PRIMARY_GREEN: "#22CC88",
  SUB_GREEN: "#82E673",
  SECONDARY_PURPLE: "#A451F7",
  SUB_PURPLE: "#534165",
  ORANGE: "#EB683F",
  RED: "#DF1D1D",
  BLUE: "#0078D4",
  WHITE: "#FFFFFF",
  LIGHT_GRAY1: "#DFDFDF",
  LIGHT_GRAY2: "#C1C1C1",
  GRAY1: "#A5A5A5",
  GRAY2: "#8B8B8B",
  GRAY3: "#6F6F6F",
  GRAY4: "#555555",
  DARK_GRAY1: "#3D3D3D",
  DARK_GRAY2: "#242424",
  BLACK: "#000000",
  BG: "#F6F4EE",
  LIGHT_BG1: "#FAFAF6",
  LIGHT_BG2: "#F5F4F3",
  LIGHT_BG3: "#F7F7F7",
};

const typo = {
  H1_B: getTypo("heading1", fontWeights.BOLD),
  H2_B: getTypo("heading2", fontWeights.BOLD),
  H3_B: getTypo("heading3", fontWeights.BOLD),
  S1_B: getTypo("subtitle1", fontWeights.BOLD),
  S1_R: getTypo("subtitle1", fontWeights.REGULAR),
  S2_B: getTypo("subtitle2", fontWeights.BOLD),
  S2_R: getTypo("subtitle2", fontWeights.REGULAR),
  B1_B: getTypo("body1", fontWeights.BOLD),
  B1_R: getTypo("body1", fontWeights.REGULAR),
  B2_B: getTypo("body2", fontWeights.BOLD),
  B2_R: getTypo("body2", fontWeights.REGULAR),
  B3_B: getTypo("body3", fontWeights.BOLD),
  B3_R: getTypo("body3", fontWeights.REGULAR),
};

export const appTheme = { colors, typo };

export type Theme = typeof appTheme;

export type ColorsType = keyof typeof colors;

export type TypoType = keyof typeof typo;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
