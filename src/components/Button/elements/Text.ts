import styled from 'styled-components';
import { windows10Fluent as whitelabel } from '../../../json/json';

const textAccent = whitelabel?.button?.accent?.text;
const textDefault = whitelabel?.button?.default?.text;
const textText = whitelabel?.button?.text?.text;

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
});

export default TextElement;
