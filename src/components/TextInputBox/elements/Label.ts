import styled from 'styled-components';
import { windows10Fluent as whitelabel } from '../../../json/json';

const labelLabelOnTop = whitelabel.textInputBox?.labelOnTop?.label;

const LabelElement = styled.span({
  // ---------------------------------------------------------------------------
  // Type 1 - Label on Top
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.label-on-top': {
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
    paddingLeft: labelLabelOnTop?.base?.paddingLeft,
    paddingRight: labelLabelOnTop?.base?.paddingRight,
  },
  '&.label-on-top.hover': {
    color: labelLabelOnTop?.interactivity?.hover?.fontColor,
  },
  '&.label-on-top.focus': {
    color: labelLabelOnTop?.interactivity?.focus?.fontColor,
  },
  '&.label-on-top.pressed': {
    color: labelLabelOnTop?.interactivity?.pressed?.fontColor,
  },
  '&.label-on-top.visited': {
    color: labelLabelOnTop?.interactivity?.visited?.fontColor,
  },

  // Validation
  '&.label-on-top.disabled': {
    color: labelLabelOnTop?.validation?.disabled?.fontColor,
  },

  // Sizing
  '&.label-on-top.xxx-small': {
    color: labelLabelOnTop?.sizing?.xxxSmall?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.xxxSmall?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.xxxSmall?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.xxxSmall?.lineHeight
      ? `${labelLabelOnTop.sizing.xxxSmall.lineHeight}px`
      : undefined,
  },
  '&.label-on-top.xx-small': {
    color: labelLabelOnTop?.sizing?.xxSmall?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.xxSmall?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.xxSmall?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.xxSmall?.lineHeight
      ? `${labelLabelOnTop.sizing.xxSmall.lineHeight}px`
      : undefined,
  },
  '&.label-on-top.x-small': {
    color: labelLabelOnTop?.sizing?.xSmall?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.xSmall?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.xSmall?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.xSmall?.lineHeight
      ? `${labelLabelOnTop.sizing.xSmall.lineHeight}px`
      : undefined,
  },
  '&.label-on-top.small': {
    color: labelLabelOnTop?.sizing?.small?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.small?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.small?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.small?.lineHeight
      ? `${labelLabelOnTop.sizing.small.lineHeight}px`
      : undefined,
  },
  '&.label-on-top.medium': {
    color: labelLabelOnTop?.sizing?.medium?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.medium?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.medium?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.medium?.lineHeight
      ? `${labelLabelOnTop.sizing.medium.lineHeight}px`
      : undefined,
  },
  '&.label-on-top.large': {
    color: labelLabelOnTop?.sizing?.large?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.large?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.large?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.large?.lineHeight
      ? `${labelLabelOnTop.sizing.large.lineHeight}px`
      : undefined,
  },
  '&.label-on-top.x-large': {
    color: labelLabelOnTop?.sizing?.xLarge?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.xLarge?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.xLarge?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.xLarge?.lineHeight
      ? `${labelLabelOnTop.sizing.xLarge.lineHeight}px`
      : undefined,
  },
  '&.label-on-top.xx-large': {
    color: labelLabelOnTop?.sizing?.xxLarge?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.xxLarge?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.xxLarge?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.xxLarge?.lineHeight
      ? `${labelLabelOnTop.sizing.xxLarge.lineHeight}px`
      : undefined,
  },
  '&.label-on-top.xxx-large': {
    color: labelLabelOnTop?.sizing?.xxxLarge?.fontColor,
    fontWeight: labelLabelOnTop?.sizing?.xxxLarge?.fontWeight,
    fontSize: labelLabelOnTop?.sizing?.xxxLarge?.fontSize,
    lineHeight: labelLabelOnTop?.sizing?.xxxLarge?.lineHeight
      ? `${labelLabelOnTop.sizing.xxxLarge.lineHeight}px`
      : undefined,
  },
});

export default LabelElement;
