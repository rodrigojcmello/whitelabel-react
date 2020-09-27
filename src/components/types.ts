export interface ElementBorder {
  borderRadius?: number;
  borderWidth?: number;
  borderStyle?: 'solid';
  borderColor?: string;
}

export interface ElementBackground {
  backgroundColor?: string;
}

export interface ElementDimensions {
  height?: number;
  minWidth?: number;
}

export interface ElementTextColor {
  fontColor?: string;
}

export interface ElementTextSizing extends ElementTextColor {
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export interface ElementHorizontalPadding {
  paddingLeft?: number;
  paddingRight?: number;
}

export interface ElementText extends ElementTextColor, ElementTextSizing {
  fontFamily?: string;
  fontStyle?: 'italic';
  textDecorationLine?: 'underline' | 'overline' | 'line-through';
}
