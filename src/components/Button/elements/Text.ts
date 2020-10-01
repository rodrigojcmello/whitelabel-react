import styled from 'styled-components';
import styledConfig from '../../../json/json';

const textAccent = styledConfig?.button?.accent?.text;
const textDefault = styledConfig?.button?.default?.text;
const textText = styledConfig?.button?.text?.text;

const TextElement = styled.span({
  // ---------------------------------------------------------------------------
  // Type 1 - Accent
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.accent': {
    fontFamily: textAccent?.base?.fontFamily,
    fontSize: textAccent?.base?.fontSize,
    fontStyle: textAccent?.base?.fontStyle,
    fontWeight: textAccent?.base?.fontWeight,
    lineHeight: textAccent?.base?.lineHeight
      ? `${textAccent.base.lineHeight}px`
      : undefined,
    color:
      textAccent?.interactivity?.rest?.fontColor || textAccent?.base?.fontColor,
    textDecorationLine: textAccent?.base?.textDecorationLine,
    paddingLeft: textAccent?.base?.paddingLeft,
    paddingRight: textAccent?.base?.paddingRight,
  },
  '&.accent:hover': {
    color: textAccent?.interactivity?.hover?.fontColor,
  },
  '&.accent:focus': {
    color: textAccent?.interactivity?.focus?.fontColor,
  },
  '&.accent:pressed': {
    color: textAccent?.interactivity?.pressed?.fontColor,
  },
  '&.accent:visited': {
    color: textAccent?.interactivity?.visited?.fontColor,
  },

  // Validation
  '&.accent.disabled': {
    color: textAccent?.validation?.disabled?.fontColor,
  },

  // Sizing
  '&.accent.xxx-small': {
    color: textAccent?.sizing?.xxxSmall?.fontColor,
    fontWeight: textAccent?.sizing?.xxxSmall?.fontWeight,
    fontSize: textAccent?.sizing?.xxxSmall?.fontSize,
    lineHeight: textAccent?.sizing?.xxxSmall?.lineHeight
      ? `${textAccent.sizing.xxxSmall.lineHeight}px`
      : undefined,
  },
  '&.accent.xx-small': {
    color: textAccent?.sizing?.xxSmall?.fontColor,
    fontWeight: textAccent?.sizing?.xxSmall?.fontWeight,
    fontSize: textAccent?.sizing?.xxSmall?.fontSize,
    lineHeight: textAccent?.sizing?.xxSmall?.lineHeight
      ? `${textAccent.sizing.xxSmall.lineHeight}px`
      : undefined,
  },
  '&.accent.x-small': {
    color: textAccent?.sizing?.xSmall?.fontColor,
    fontWeight: textAccent?.sizing?.xSmall?.fontWeight,
    fontSize: textAccent?.sizing?.xSmall?.fontSize,
    lineHeight: textAccent?.sizing?.xSmall?.lineHeight
      ? `${textAccent.sizing.xSmall.lineHeight}px`
      : undefined,
  },
  '&.accent.small': {
    color: textAccent?.sizing?.small?.fontColor,
    fontWeight: textAccent?.sizing?.small?.fontWeight,
    fontSize: textAccent?.sizing?.small?.fontSize,
    lineHeight: textAccent?.sizing?.small?.lineHeight
      ? `${textAccent.sizing.small.lineHeight}px`
      : undefined,
  },
  '&.accent.medium': {
    color: textAccent?.sizing?.medium?.fontColor,
    fontWeight: textAccent?.sizing?.medium?.fontWeight,
    fontSize: textAccent?.sizing?.medium?.fontSize,
    lineHeight: textAccent?.sizing?.medium?.lineHeight
      ? `${textAccent.sizing.medium.lineHeight}px`
      : undefined,
  },
  '&.accent.large': {
    color: textAccent?.sizing?.large?.fontColor,
    fontWeight: textAccent?.sizing?.large?.fontWeight,
    fontSize: textAccent?.sizing?.large?.fontSize,
    lineHeight: textAccent?.sizing?.large?.lineHeight
      ? `${textAccent.sizing.large.lineHeight}px`
      : undefined,
  },
  '&.accent.x-large': {
    color: textAccent?.sizing?.xLarge?.fontColor,
    fontWeight: textAccent?.sizing?.xLarge?.fontWeight,
    fontSize: textAccent?.sizing?.xLarge?.fontSize,
    lineHeight: textAccent?.sizing?.xLarge?.lineHeight
      ? `${textAccent.sizing.xLarge.lineHeight}px`
      : undefined,
  },
  '&.accent.xx-large': {
    color: textAccent?.sizing?.xxLarge?.fontColor,
    fontWeight: textAccent?.sizing?.xxLarge?.fontWeight,
    fontSize: textAccent?.sizing?.xxLarge?.fontSize,
    lineHeight: textAccent?.sizing?.xxLarge?.lineHeight
      ? `${textAccent.sizing.xxLarge.lineHeight}px`
      : undefined,
  },
  '&.accent.xxx-large': {
    color: textAccent?.sizing?.xxxLarge?.fontColor,
    fontWeight: textAccent?.sizing?.xxxLarge?.fontWeight,
    fontSize: textAccent?.sizing?.xxxLarge?.fontSize,
    lineHeight: textAccent?.sizing?.xxxLarge?.lineHeight
      ? `${textAccent.sizing.xxxLarge.lineHeight}px`
      : undefined,
  },

  // ---------------------------------------------------------------------------
  // Type 2 - Default
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.default': {
    fontFamily: textDefault?.base?.fontFamily,
    fontSize: textDefault?.base?.fontSize,
    fontStyle: textDefault?.base?.fontStyle,
    fontWeight: textDefault?.base?.fontWeight,
    lineHeight: textDefault?.base?.lineHeight
      ? `${textDefault.base.lineHeight}px`
      : undefined,
    color:
      textDefault?.interactivity?.rest?.fontColor ||
      textDefault?.base?.fontColor,
    textDecorationLine: textDefault?.base?.textDecorationLine,
    paddingLeft: textDefault?.base?.paddingLeft,
    paddingRight: textDefault?.base?.paddingRight,
  },
  '&.default:hover': {
    color: textDefault?.interactivity?.hover?.fontColor,
  },
  '&.default:focus': {
    color: textDefault?.interactivity?.focus?.fontColor,
  },
  '&.default:pressed': {
    color: textDefault?.interactivity?.pressed?.fontColor,
  },
  '&.default:visited': {
    color: textDefault?.interactivity?.visited?.fontColor,
  },

  // Validation
  '&.default.disabled': {
    color: textDefault?.validation?.disabled?.fontColor,
  },

  // Sizing
  '&.default.xxx-small': {
    color: textDefault?.sizing?.xxxSmall?.fontColor,
    fontWeight: textDefault?.sizing?.xxxSmall?.fontWeight,
    fontSize: textDefault?.sizing?.xxxSmall?.fontSize,
    lineHeight: textDefault?.sizing?.xxxSmall?.lineHeight
      ? `${textDefault.sizing.xxxSmall.lineHeight}px`
      : undefined,
  },
  '&.default.xx-small': {
    color: textDefault?.sizing?.xxSmall?.fontColor,
    fontWeight: textDefault?.sizing?.xxSmall?.fontWeight,
    fontSize: textDefault?.sizing?.xxSmall?.fontSize,
    lineHeight: textDefault?.sizing?.xxSmall?.lineHeight
      ? `${textDefault.sizing.xxSmall.lineHeight}px`
      : undefined,
  },
  '&.default.x-small': {
    color: textDefault?.sizing?.xSmall?.fontColor,
    fontWeight: textDefault?.sizing?.xSmall?.fontWeight,
    fontSize: textDefault?.sizing?.xSmall?.fontSize,
    lineHeight: textDefault?.sizing?.xSmall?.lineHeight
      ? `${textDefault.sizing.xSmall.lineHeight}px`
      : undefined,
  },
  '&.default.small': {
    color: textDefault?.sizing?.small?.fontColor,
    fontWeight: textDefault?.sizing?.small?.fontWeight,
    fontSize: textDefault?.sizing?.small?.fontSize,
    lineHeight: textDefault?.sizing?.small?.lineHeight
      ? `${textDefault.sizing.small.lineHeight}px`
      : undefined,
  },
  '&.default.medium': {
    color: textDefault?.sizing?.medium?.fontColor,
    fontWeight: textDefault?.sizing?.medium?.fontWeight,
    fontSize: textDefault?.sizing?.medium?.fontSize,
    lineHeight: textDefault?.sizing?.medium?.lineHeight
      ? `${textDefault.sizing.medium.lineHeight}px`
      : undefined,
  },
  '&.default.large': {
    color: textDefault?.sizing?.large?.fontColor,
    fontWeight: textDefault?.sizing?.large?.fontWeight,
    fontSize: textDefault?.sizing?.large?.fontSize,
    lineHeight: textDefault?.sizing?.large?.lineHeight
      ? `${textDefault.sizing.large.lineHeight}px`
      : undefined,
  },
  '&.default.x-large': {
    color: textDefault?.sizing?.xLarge?.fontColor,
    fontWeight: textDefault?.sizing?.xLarge?.fontWeight,
    fontSize: textDefault?.sizing?.xLarge?.fontSize,
    lineHeight: textDefault?.sizing?.xLarge?.lineHeight
      ? `${textDefault.sizing.xLarge.lineHeight}px`
      : undefined,
  },
  '&.default.xx-large': {
    color: textDefault?.sizing?.xxLarge?.fontColor,
    fontWeight: textDefault?.sizing?.xxLarge?.fontWeight,
    fontSize: textDefault?.sizing?.xxLarge?.fontSize,
    lineHeight: textDefault?.sizing?.xxLarge?.lineHeight
      ? `${textDefault.sizing.xxLarge.lineHeight}px`
      : undefined,
  },
  '&.default.xxx-large': {
    color: textDefault?.sizing?.xxxLarge?.fontColor,
    fontWeight: textDefault?.sizing?.xxxLarge?.fontWeight,
    fontSize: textDefault?.sizing?.xxxLarge?.fontSize,
    lineHeight: textDefault?.sizing?.xxxLarge?.lineHeight
      ? `${textDefault.sizing.xxxLarge.lineHeight}px`
      : undefined,
  },

  // ---------------------------------------------------------------------------
  // Type 3 - Text
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.text': {
    fontFamily: textText?.base?.fontFamily,
    fontSize: textText?.base?.fontSize,
    fontStyle: textText?.base?.fontStyle,
    fontWeight: textText?.base?.fontWeight,
    lineHeight: textText?.base?.lineHeight
      ? `${textText.base.lineHeight}px`
      : undefined,
    color:
      textText?.interactivity?.rest?.fontColor || textText?.base?.fontColor,
    textDecorationLine: textText?.base?.textDecorationLine,
    paddingLeft: textText?.base?.paddingLeft,
    paddingRight: textText?.base?.paddingRight,
  },
  '&.text:hover': {
    color: textText?.interactivity?.hover?.fontColor,
  },
  '&.text:focus': {
    color: textText?.interactivity?.focus?.fontColor,
  },
  '&.text:pressed': {
    color: textText?.interactivity?.pressed?.fontColor,
  },
  '&.text:visited': {
    color: textText?.interactivity?.visited?.fontColor,
  },

  // Validation
  '&.text.disabled': {
    color: textText?.validation?.disabled?.fontColor,
  },

  // Sizing
  '&.text.xxx-small': {
    color: textText?.sizing?.xxxSmall?.fontColor,
    fontWeight: textText?.sizing?.xxxSmall?.fontWeight,
    fontSize: textText?.sizing?.xxxSmall?.fontSize,
    lineHeight: textText?.sizing?.xxxSmall?.lineHeight
      ? `${textText.sizing.xxxSmall.lineHeight}px`
      : undefined,
  },
  '&.text.xx-small': {
    color: textText?.sizing?.xxSmall?.fontColor,
    fontWeight: textText?.sizing?.xxSmall?.fontWeight,
    fontSize: textText?.sizing?.xxSmall?.fontSize,
    lineHeight: textText?.sizing?.xxSmall?.lineHeight
      ? `${textText.sizing.xxSmall.lineHeight}px`
      : undefined,
  },
  '&.text.x-small': {
    color: textText?.sizing?.xSmall?.fontColor,
    fontWeight: textText?.sizing?.xSmall?.fontWeight,
    fontSize: textText?.sizing?.xSmall?.fontSize,
    lineHeight: textText?.sizing?.xSmall?.lineHeight
      ? `${textText.sizing.xSmall.lineHeight}px`
      : undefined,
  },
  '&.text.small': {
    color: textText?.sizing?.small?.fontColor,
    fontWeight: textText?.sizing?.small?.fontWeight,
    fontSize: textText?.sizing?.small?.fontSize,
    lineHeight: textText?.sizing?.small?.lineHeight
      ? `${textText.sizing.small.lineHeight}px`
      : undefined,
  },
  '&.text.medium': {
    color: textText?.sizing?.medium?.fontColor,
    fontWeight: textText?.sizing?.medium?.fontWeight,
    fontSize: textText?.sizing?.medium?.fontSize,
    lineHeight: textText?.sizing?.medium?.lineHeight
      ? `${textText.sizing.medium.lineHeight}px`
      : undefined,
  },
  '&.text.large': {
    color: textText?.sizing?.large?.fontColor,
    fontWeight: textText?.sizing?.large?.fontWeight,
    fontSize: textText?.sizing?.large?.fontSize,
    lineHeight: textText?.sizing?.large?.lineHeight
      ? `${textText.sizing.large.lineHeight}px`
      : undefined,
  },
  '&.text.x-large': {
    color: textText?.sizing?.xLarge?.fontColor,
    fontWeight: textText?.sizing?.xLarge?.fontWeight,
    fontSize: textText?.sizing?.xLarge?.fontSize,
    lineHeight: textText?.sizing?.xLarge?.lineHeight
      ? `${textText.sizing.xLarge.lineHeight}px`
      : undefined,
  },
  '&.text.xx-large': {
    color: textText?.sizing?.xxLarge?.fontColor,
    fontWeight: textText?.sizing?.xxLarge?.fontWeight,
    fontSize: textText?.sizing?.xxLarge?.fontSize,
    lineHeight: textText?.sizing?.xxLarge?.lineHeight
      ? `${textText.sizing.xxLarge.lineHeight}px`
      : undefined,
  },
  '&.text.xxx-large': {
    color: textText?.sizing?.xxxLarge?.fontColor,
    fontWeight: textText?.sizing?.xxxLarge?.fontWeight,
    fontSize: textText?.sizing?.xxxLarge?.fontSize,
    lineHeight: textText?.sizing?.xxxLarge?.lineHeight
      ? `${textText.sizing.xxxLarge.lineHeight}px`
      : undefined,
  },
});

export default TextElement;
