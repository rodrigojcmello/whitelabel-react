import styled from 'styled-components';
import styledConfig from '../../../json/json';

const labelLabelOnTop = styledConfig.textInputBox?.labelOnTop?.label;
const labelLabelPlaceholder =
  styledConfig.textInputBox?.labelPlaceholder?.label;

const LabelElement = styled.label({
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

  // ---------------------------------------------------------------------------
  // Type 2 - Label Placeholder
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.label-placeholder': {
    position: 'absolute',
    top: -10,
    zIndex: 1,
    left: 10,
    backgroundColor: '#FFFFFF',
    paddingRight: 8,
    paddingLeft: 8,
    display: 'inline-block',

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
    // paddingLeft: labelLabelPlaceholder?.base?.paddingLeft,
    // paddingRight: labelLabelPlaceholder?.base?.paddingRight,
  },
  '&.label-placeholder.hover': {
    color: labelLabelPlaceholder?.interactivity?.hover?.fontColor,
  },
  '&.label-placeholder.focus': {
    color: labelLabelPlaceholder?.interactivity?.focus?.fontColor,
  },
  '&.label-placeholder.pressed': {
    color: labelLabelPlaceholder?.interactivity?.pressed?.fontColor,
  },
  '&.label-placeholder.visited': {
    color: labelLabelPlaceholder?.interactivity?.visited?.fontColor,
  },

  // Validation
  '&.label-placeholder.disabled': {
    color: labelLabelPlaceholder?.validation?.disabled?.fontColor,
  },

  // Sizing
  '&.label-placeholder.xxx-small': {
    color: labelLabelPlaceholder?.sizing?.xxxSmall?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.xxxSmall?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.xxxSmall?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.xxxSmall?.lineHeight
      ? `${labelLabelPlaceholder.sizing.xxxSmall.lineHeight}px`
      : undefined,
  },
  '&.label-placeholder.xx-small': {
    color: labelLabelPlaceholder?.sizing?.xxSmall?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.xxSmall?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.xxSmall?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.xxSmall?.lineHeight
      ? `${labelLabelPlaceholder.sizing.xxSmall.lineHeight}px`
      : undefined,
  },
  '&.label-placeholder.x-small': {
    color: labelLabelPlaceholder?.sizing?.xSmall?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.xSmall?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.xSmall?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.xSmall?.lineHeight
      ? `${labelLabelPlaceholder.sizing.xSmall.lineHeight}px`
      : undefined,
  },
  '&.label-placeholder.small': {
    color: labelLabelPlaceholder?.sizing?.small?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.small?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.small?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.small?.lineHeight
      ? `${labelLabelPlaceholder.sizing.small.lineHeight}px`
      : undefined,
  },
  '&.label-placeholder.medium': {
    color: labelLabelPlaceholder?.sizing?.medium?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.medium?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.medium?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.medium?.lineHeight
      ? `${labelLabelPlaceholder.sizing.medium.lineHeight}px`
      : undefined,
  },
  '&.label-placeholder.large': {
    color: labelLabelPlaceholder?.sizing?.large?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.large?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.large?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.large?.lineHeight
      ? `${labelLabelPlaceholder.sizing.large.lineHeight}px`
      : undefined,
  },
  '&.label-placeholder.x-large': {
    color: labelLabelPlaceholder?.sizing?.xLarge?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.xLarge?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.xLarge?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.xLarge?.lineHeight
      ? `${labelLabelPlaceholder.sizing.xLarge.lineHeight}px`
      : undefined,
  },
  '&.label-placeholder.xx-large': {
    color: labelLabelPlaceholder?.sizing?.xxLarge?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.xxLarge?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.xxLarge?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.xxLarge?.lineHeight
      ? `${labelLabelPlaceholder.sizing.xxLarge.lineHeight}px`
      : undefined,
  },
  '&.label-placeholder.xxx-large': {
    color: labelLabelPlaceholder?.sizing?.xxxLarge?.fontColor,
    fontWeight: labelLabelPlaceholder?.sizing?.xxxLarge?.fontWeight,
    fontSize: labelLabelPlaceholder?.sizing?.xxxLarge?.fontSize,
    lineHeight: labelLabelPlaceholder?.sizing?.xxxLarge?.lineHeight
      ? `${labelLabelPlaceholder.sizing.xxxLarge.lineHeight}px`
      : undefined,
  },
});

export default LabelElement;
