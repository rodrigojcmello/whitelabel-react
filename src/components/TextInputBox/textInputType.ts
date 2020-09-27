import {
  ElementBackground,
  ElementBorder,
  ElementDimensions,
  ElementHorizontalPadding,
  ElementText,
  ElementTextColor,
  ElementTextSizing,
} from '../types';

type LabelInputElement = ElementBorder &
  ElementBackground &
  ElementText &
  ElementHorizontalPadding;

export interface TextInputBoxType {
  textInputBox?: {
    labelOnTop?: {
      input?: {
        base?: LabelInputElement;
        interactivity?: {
          rest?: LabelInputElement;
          hover?: LabelInputElement;
          focus?: LabelInputElement;
          pressed?: LabelInputElement;
          visited?: LabelInputElement;
        };
        validation?: {
          disabled?: LabelInputElement;
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
        base?: ElementText;
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
