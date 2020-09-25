interface ElementBorder {
  borderRadius?: number;
  borderWidth?: number;
  borderStyle?: 'solid';
}

interface ElementBackground {
  backgroundColor?: string;
}

interface ElementDimensions {
  height?: number;
  minWidth?: number;
}

interface ElementTextColor {
  fontColor?: string;
}

interface ElementText extends ElementTextColor {
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: 'italic' | 'normal';
  textDecorationLine?: 'none' | 'underline' | 'overline' | 'line-through';
  lineHeight?: number;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

interface ElementTextSizing {
  fontSize?: number;
  lineHeight?: number;
  fontColor?: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

type ButtonBlockElement = ElementBorder & ElementBackground;

// -----------------------------------------------------------------------------

export interface SimpleUI {
  button?: {
    accent?: {
      block?: {
        base?: ButtonBlockElement;
        interactive?: {
          rest?: ButtonBlockElement;
          hover?: ButtonBlockElement;
          focus?: ButtonBlockElement;
          pressed?: ButtonBlockElement;
          visited?: ButtonBlockElement;
        };
        validation?: {
          disabled?: ButtonBlockElement;
        };
        sizing?: {
          xxxSmall?: ElementDimensions;
          xxSmall?: ElementDimensions;
          xSmall?: ElementDimensions;
          small?: ElementDimensions;
          medium?: ElementDimensions;
          large?: ElementDimensions;
          xLarge?: ElementDimensions;
          xxLarge?: ElementDimensions;
          xxxLarge?: ElementDimensions;
        };
      };
      text: {
        base: ElementText;
        interactive?: {
          rest?: ElementTextColor;
          hover?: ElementTextColor;
          focus?: ElementTextColor;
          pressed?: ElementTextColor;
          visited?: ElementTextColor;
        };
        validation?: {
          disabled?: ElementTextColor;
        };
        sizing?: {
          xxxSmall?: ElementTextSizing;
          xxSmall?: ElementTextSizing;
          xSmall?: ElementTextSizing;
          small?: ElementTextSizing;
          medium?: ElementTextSizing;
          large?: ElementTextSizing;
          xLarge?: ElementTextSizing;
          xxLarge?: ElementTextSizing;
          xxxLarge?: ElementTextSizing;
        };
      };
    };
  };
}
