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

interface ElementTextSizing extends ElementTextColor {
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

interface ElementHorizontalPadding {
  paddingLeft?: number;
  paddingRight?: number;
}

interface ElementText
  extends ElementTextColor,
    ElementTextSizing,
    ElementHorizontalPadding {
  fontFamily?: string;
  fontStyle?: 'italic';
  textDecorationLine?: 'underline' | 'overline' | 'line-through';
}

type ButtonBlockElement = ElementBorder & ElementBackground;

// -----------------------------------------------------------------------------

export interface ButtonType {
  button?: {
    accent?: {
      block?: {
        base?: ButtonBlockElement;
        interactivity?: {
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
        interactivity?: {
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
    default?: {
      block?: {
        base?: ButtonBlockElement;
        interactivity?: {
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
        interactivity?: {
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
    text?: {
      block?: {
        base?: ButtonBlockElement;
        interactivity?: {
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
        interactivity?: {
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
