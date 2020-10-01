import {
  ElementBackground,
  ElementBorder,
  ElementDimensions,
  ElementHorizontalPadding,
  ElementText,
  ElementTextColor,
  ElementTextSizing,
} from '../types';

type LabelInputTextBoxElement = ElementBorder &
  ElementBackground &
  ElementText &
  ElementHorizontalPadding;

type InputInputTextBoxElement = ElementText & ElementHorizontalPadding;

export interface TextInputBoxType {
  textInputBox?: {
    labelOnTop?: {
      input?: {
        base?: LabelInputTextBoxElement;
        interactivity?: {
          rest?: LabelInputTextBoxElement;
          hover?: LabelInputTextBoxElement;
          focus?: LabelInputTextBoxElement;
          pressed?: LabelInputTextBoxElement;
          visited?: LabelInputTextBoxElement;
        };
        validation?: {
          disabled?: LabelInputTextBoxElement;
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
      label?: {
        base?: InputInputTextBoxElement;
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
    labelPlaceholder?: {
      input?: {
        base?: LabelInputTextBoxElement;
        interactivity?: {
          rest?: LabelInputTextBoxElement;
          hover?: LabelInputTextBoxElement;
          focus?: LabelInputTextBoxElement;
          pressed?: LabelInputTextBoxElement;
          visited?: LabelInputTextBoxElement;
        };
        validation?: {
          disabled?: LabelInputTextBoxElement;
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
      label?: {
        base?: InputInputTextBoxElement;
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
