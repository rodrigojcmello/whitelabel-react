import styled from 'styled-components';
import { windows10Fluent as whitelabel } from '../../../json/json';
// import whitelabel from '../../../json/legacy/whitelabel-beta-fluent';

const labelLabelOnTop = whitelabel.textInputBox?.labelOnTop?.input;

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
});

export default InputElement;
