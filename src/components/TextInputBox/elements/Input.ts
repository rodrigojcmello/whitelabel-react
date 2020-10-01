import styled from 'styled-components';
import styledConfig from '../../../json/json';

const labelLabelOnTop = styledConfig.textInputBox?.labelOnTop?.input;
const labelLabelPlaceholder =
  styledConfig.textInputBox?.labelPlaceholder?.input;

const InputElement = styled.input({
  display: 'block',
  boxSizing: 'border-box',
  border: 0,
  padding: 0,
  outline: 'none',

  // ---------------------------------------------------------------------------
  // Type 1 - Label on Top
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.label-on-top': {
    // Box
    backgroundColor:
      labelLabelOnTop?.interactivity?.rest?.backgroundColor ||
      labelLabelOnTop?.base?.backgroundColor,
    borderRadius:
      labelLabelOnTop?.interactivity?.rest?.borderRadius ||
      labelLabelOnTop?.base?.borderRadius,
    borderStyle:
      labelLabelOnTop?.interactivity?.rest?.borderStyle ||
      labelLabelOnTop?.base?.borderStyle,
    borderWidth:
      labelLabelOnTop?.interactivity?.rest?.borderWidth ||
      labelLabelOnTop?.base?.borderWidth,
    borderColor:
      labelLabelOnTop?.interactivity?.rest?.borderColor ||
      labelLabelOnTop?.base?.borderColor,
    borderBottomStyle:
      labelLabelOnTop?.interactivity?.rest?.borderBottomStyle ||
      labelLabelOnTop?.base?.borderBottomStyle,
    borderBottomColor:
      labelLabelOnTop?.interactivity?.rest?.borderBottomColor ||
      labelLabelOnTop?.base?.borderBottomColor,
    borderBottomWidth:
      labelLabelOnTop?.interactivity?.rest?.borderBottomWidth ||
      labelLabelOnTop?.base?.borderBottomWidth,

    // Horizontal Padding
    paddingLeft: labelLabelOnTop?.base?.paddingLeft,
    paddingRight: labelLabelOnTop?.base?.paddingRight,

    // Text
    fontFamily: labelLabelOnTop?.base?.fontFamily,
    fontSize: labelLabelOnTop?.base?.fontSize,
    fontStyle: labelLabelOnTop?.base?.fontStyle,
    fontWeight: labelLabelOnTop?.base?.fontWeight,
    lineHeight: labelLabelOnTop?.base?.lineHeight
      ? `${labelLabelOnTop.base.lineHeight}px`
      : undefined,
    color:
      labelLabelOnTop?.interactivity?.rest?.fontColor ||
      labelLabelOnTop?.base?.fontColor,
    textDecorationLine: labelLabelOnTop?.base?.textDecorationLine,
  },
  '&.label-on-top:hover': {
    backgroundColor: labelLabelOnTop?.interactivity?.hover?.backgroundColor,
    borderRadius: labelLabelOnTop?.interactivity?.hover?.borderRadius,
    borderStyle: labelLabelOnTop?.interactivity?.hover?.borderStyle,
    borderWidth: labelLabelOnTop?.interactivity?.hover?.borderWidth,
    borderColor: labelLabelOnTop?.interactivity?.hover?.borderColor,
  },
  '&.label-on-top:focus': {
    backgroundColor: labelLabelOnTop?.interactivity?.focus?.backgroundColor,
    borderRadius: labelLabelOnTop?.interactivity?.focus?.borderRadius,
    borderStyle: labelLabelOnTop?.interactivity?.focus?.borderStyle,
    borderWidth: labelLabelOnTop?.interactivity?.focus?.borderWidth,
    borderColor: labelLabelOnTop?.interactivity?.focus?.borderColor,
  },
  '&.label-on-top:pressed': {
    backgroundColor: labelLabelOnTop?.interactivity?.pressed?.backgroundColor,
    borderRadius: labelLabelOnTop?.interactivity?.pressed?.borderRadius,
    borderStyle: labelLabelOnTop?.interactivity?.pressed?.borderStyle,
    borderWidth: labelLabelOnTop?.interactivity?.pressed?.borderWidth,
    borderColor: labelLabelOnTop?.interactivity?.pressed?.borderColor,
  },
  '&.label-on-top:visited': {
    backgroundColor: labelLabelOnTop?.interactivity?.visited?.backgroundColor,
    borderRadius: labelLabelOnTop?.interactivity?.visited?.borderRadius,
    borderStyle: labelLabelOnTop?.interactivity?.visited?.borderStyle,
    borderColor: labelLabelOnTop?.interactivity?.visited?.borderColor,
  },

  // Validation
  '&.label-on-top.disabled': {
    backgroundColor: labelLabelOnTop?.validation?.disabled?.backgroundColor,
    borderRadius: labelLabelOnTop?.validation?.disabled?.borderRadius,
    borderStyle: labelLabelOnTop?.validation?.disabled?.borderStyle,
    borderWidth: labelLabelOnTop?.validation?.disabled?.borderWidth,
    borderColor: labelLabelOnTop?.validation?.disabled?.borderColor,
  },

  // Sizing
  '&.label-on-top.xxx-small': {
    height: labelLabelOnTop?.sizing?.xxxSmall?.height,
    minWidth: labelLabelOnTop?.sizing?.xxxSmall?.minWidth,
  },
  '&.label-on-top.xx-small': {
    height: labelLabelOnTop?.sizing?.xxSmall?.height,
    minWidth: labelLabelOnTop?.sizing?.xxSmall?.minWidth,
  },
  '&.label-on-top.x-small': {
    height: labelLabelOnTop?.sizing?.xSmall?.height,
    minWidth: labelLabelOnTop?.sizing?.xSmall?.minWidth,
  },
  '&.label-on-top.small': {
    height: labelLabelOnTop?.sizing?.small?.height,
    minWidth: labelLabelOnTop?.sizing?.small?.minWidth,
  },
  '&.label-on-top.medium': {
    height: labelLabelOnTop?.sizing?.medium?.height,
    minWidth: labelLabelOnTop?.sizing?.medium?.minWidth,
  },
  '&.label-on-top.large': {
    height: labelLabelOnTop?.sizing?.large?.height,
    minWidth: labelLabelOnTop?.sizing?.large?.minWidth,
  },
  '&.label-on-top.x-large': {
    height: labelLabelOnTop?.sizing?.xLarge?.height,
    minWidth: labelLabelOnTop?.sizing?.xLarge?.minWidth,
  },
  '&.label-on-top.xx-large': {
    height: labelLabelOnTop?.sizing?.xxLarge?.height,
    minWidth: labelLabelOnTop?.sizing?.xxLarge?.minWidth,
  },
  '&.label-on-top.xxx-large': {
    height: labelLabelOnTop?.sizing?.xxxLarge?.height,
    minWidth: labelLabelOnTop?.sizing?.xxxLarge?.minWidth,
  },

  // ---------------------------------------------------------------------------
  // Type 2 - Label Placeholder
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.label-placeholder': {
    // Box
    backgroundColor:
      labelLabelPlaceholder?.interactivity?.rest?.backgroundColor ||
      labelLabelPlaceholder?.base?.backgroundColor,
    borderRadius:
      labelLabelPlaceholder?.interactivity?.rest?.borderRadius ||
      labelLabelPlaceholder?.base?.borderRadius,
    borderStyle:
      labelLabelPlaceholder?.interactivity?.rest?.borderStyle ||
      labelLabelPlaceholder?.base?.borderStyle,
    borderWidth:
      labelLabelPlaceholder?.interactivity?.rest?.borderWidth ||
      labelLabelPlaceholder?.base?.borderWidth,
    borderColor:
      labelLabelPlaceholder?.interactivity?.rest?.borderColor ||
      labelLabelPlaceholder?.base?.borderColor,

    // Horizontal Padding
    paddingLeft: labelLabelPlaceholder?.base?.paddingLeft,
    paddingRight: labelLabelPlaceholder?.base?.paddingRight,

    // Text
    fontFamily: labelLabelPlaceholder?.base?.fontFamily,
    fontSize: labelLabelPlaceholder?.base?.fontSize,
    fontStyle: labelLabelPlaceholder?.base?.fontStyle,
    fontWeight: labelLabelPlaceholder?.base?.fontWeight,
    lineHeight: labelLabelPlaceholder?.base?.lineHeight
      ? `${labelLabelPlaceholder.base.lineHeight}px`
      : undefined,
    color:
      labelLabelPlaceholder?.interactivity?.rest?.fontColor ||
      labelLabelPlaceholder?.base?.fontColor,
    textDecorationLine: labelLabelPlaceholder?.base?.textDecorationLine,
  },
  '&.label-placeholder:hover': {
    backgroundColor:
      labelLabelPlaceholder?.interactivity?.hover?.backgroundColor,
    borderRadius: labelLabelPlaceholder?.interactivity?.hover?.borderRadius,
    borderStyle: labelLabelPlaceholder?.interactivity?.hover?.borderStyle,
    borderWidth: labelLabelPlaceholder?.interactivity?.hover?.borderWidth,
    borderColor: labelLabelPlaceholder?.interactivity?.hover?.borderColor,
  },
  '&.label-placeholder:focus': {
    backgroundColor:
      labelLabelPlaceholder?.interactivity?.focus?.backgroundColor,
    borderRadius: labelLabelPlaceholder?.interactivity?.focus?.borderRadius,
    borderStyle: labelLabelPlaceholder?.interactivity?.focus?.borderStyle,
    borderWidth: labelLabelPlaceholder?.interactivity?.focus?.borderWidth,
    borderColor: labelLabelPlaceholder?.interactivity?.focus?.borderColor,
  },
  '&.label-placeholder:pressed': {
    backgroundColor:
      labelLabelPlaceholder?.interactivity?.pressed?.backgroundColor,
    borderRadius: labelLabelPlaceholder?.interactivity?.pressed?.borderRadius,
    borderStyle: labelLabelPlaceholder?.interactivity?.pressed?.borderStyle,
    borderWidth: labelLabelPlaceholder?.interactivity?.pressed?.borderWidth,
    borderColor: labelLabelPlaceholder?.interactivity?.pressed?.borderColor,
  },
  '&.label-placeholder:visited': {
    backgroundColor:
      labelLabelPlaceholder?.interactivity?.visited?.backgroundColor,
    borderRadius: labelLabelPlaceholder?.interactivity?.visited?.borderRadius,
    borderStyle: labelLabelPlaceholder?.interactivity?.visited?.borderStyle,
    borderColor: labelLabelPlaceholder?.interactivity?.visited?.borderColor,
  },

  // Validation
  '&.label-placeholder.disabled': {
    backgroundColor:
      labelLabelPlaceholder?.validation?.disabled?.backgroundColor,
    borderRadius: labelLabelPlaceholder?.validation?.disabled?.borderRadius,
    borderStyle: labelLabelPlaceholder?.validation?.disabled?.borderStyle,
    borderWidth: labelLabelPlaceholder?.validation?.disabled?.borderWidth,
    borderColor: labelLabelPlaceholder?.validation?.disabled?.borderColor,
  },

  // Sizing
  '&.label-placeholder.xxx-small': {
    height: labelLabelPlaceholder?.sizing?.xxxSmall?.height,
    minWidth: labelLabelPlaceholder?.sizing?.xxxSmall?.minWidth,
  },
  '&.label-placeholder.xx-small': {
    height: labelLabelPlaceholder?.sizing?.xxSmall?.height,
    minWidth: labelLabelPlaceholder?.sizing?.xxSmall?.minWidth,
  },
  '&.label-placeholder.x-small': {
    height: labelLabelPlaceholder?.sizing?.xSmall?.height,
    minWidth: labelLabelPlaceholder?.sizing?.xSmall?.minWidth,
  },
  '&.label-placeholder.small': {
    height: labelLabelPlaceholder?.sizing?.small?.height,
    minWidth: labelLabelPlaceholder?.sizing?.small?.minWidth,
  },
  '&.label-placeholder.medium': {
    height: labelLabelPlaceholder?.sizing?.medium?.height,
    minWidth: labelLabelPlaceholder?.sizing?.medium?.minWidth,
  },
  '&.label-placeholder.large': {
    height: labelLabelPlaceholder?.sizing?.large?.height,
    minWidth: labelLabelPlaceholder?.sizing?.large?.minWidth,
  },
  '&.label-placeholder.x-large': {
    height: labelLabelPlaceholder?.sizing?.xLarge?.height,
    minWidth: labelLabelPlaceholder?.sizing?.xLarge?.minWidth,
  },
  '&.label-placeholder.xx-large': {
    height: labelLabelPlaceholder?.sizing?.xxLarge?.height,
    minWidth: labelLabelPlaceholder?.sizing?.xxLarge?.minWidth,
  },
  '&.label-placeholder.xxx-large': {
    height: labelLabelPlaceholder?.sizing?.xxxLarge?.height,
    minWidth: labelLabelPlaceholder?.sizing?.xxxLarge?.minWidth,
  },
});

export default InputElement;
