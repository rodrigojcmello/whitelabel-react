import styled from 'styled-components';
import { windows10Fluent as whitelabel } from '../../../json/json';

const blockAccent = whitelabel?.button?.accent?.block;
const blockDefault = whitelabel?.button?.default?.block;
const blockText = whitelabel?.button?.text?.block;

const BlockElement = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  transition: 'all ease-in 0.2s',

  // ---------------------------------------------------------------------------
  // Type 1 - Accent
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.accent': {
    backgroundColor:
      blockAccent?.interactivity?.rest?.backgroundColor ||
      blockAccent?.base?.backgroundColor,
    borderRadius:
      blockAccent?.interactivity?.rest?.borderRadius ||
      blockAccent?.base?.borderRadius,
    borderStyle:
      blockAccent?.interactivity?.rest?.borderStyle ||
      blockAccent?.base?.borderStyle,
    borderWidth:
      blockAccent?.interactivity?.rest?.borderWidth ||
      blockAccent?.base?.borderWidth,
    borderColor:
      blockAccent?.interactivity?.rest?.borderColor ||
      blockAccent?.base?.borderColor,
  },
  '&.accent:hover': {
    backgroundColor: blockAccent?.interactivity?.hover?.backgroundColor,
    borderRadius: blockAccent?.interactivity?.hover?.borderRadius,
    borderStyle: blockAccent?.interactivity?.hover?.borderStyle,
    borderWidth: blockAccent?.interactivity?.hover?.borderWidth,
    borderColor: blockAccent?.interactivity?.hover?.borderColor,
  },
  '&.accent:focus': {
    backgroundColor: blockAccent?.interactivity?.focus?.backgroundColor,
    borderRadius: blockAccent?.interactivity?.focus?.borderRadius,
    borderStyle: blockAccent?.interactivity?.focus?.borderStyle,
    borderWidth: blockAccent?.interactivity?.focus?.borderWidth,
    borderColor: blockAccent?.interactivity?.focus?.borderColor,
  },
  '&.accent:pressed': {
    backgroundColor: blockAccent?.interactivity?.pressed?.backgroundColor,
    borderRadius: blockAccent?.interactivity?.pressed?.borderRadius,
    borderStyle: blockAccent?.interactivity?.pressed?.borderStyle,
    borderWidth: blockAccent?.interactivity?.pressed?.borderWidth,
    borderColor: blockAccent?.interactivity?.pressed?.borderColor,
  },
  '&.accent:visited': {
    backgroundColor: blockAccent?.interactivity?.visited?.backgroundColor,
    borderRadius: blockAccent?.interactivity?.visited?.borderRadius,
    borderStyle: blockAccent?.interactivity?.visited?.borderStyle,
    borderWidth: blockAccent?.interactivity?.visited?.borderWidth,
    borderColor: blockAccent?.interactivity?.visited?.borderColor,
  },

  // Validation
  '&.accent.disabled': {
    backgroundColor: blockAccent?.validation?.disabled?.backgroundColor,
    borderRadius: blockAccent?.validation?.disabled?.borderRadius,
    borderStyle: blockAccent?.validation?.disabled?.borderStyle,
    borderWidth: blockAccent?.validation?.disabled?.borderWidth,
    borderColor: blockAccent?.validation?.disabled?.borderColor,
  },

  // Sizing
  '&.accent.xxx-small': {
    height: blockAccent?.sizing?.xxxSmall?.height,
    minWidth: blockAccent?.sizing?.xxxSmall?.minWidth,
  },
  '&.accent.xx-small': {
    height: blockAccent?.sizing?.xxSmall?.height,
    minWidth: blockAccent?.sizing?.xxSmall?.minWidth,
  },
  '&.accent.x-small': {
    height: blockAccent?.sizing?.xSmall?.height,
    minWidth: blockAccent?.sizing?.xSmall?.minWidth,
  },
  '&.accent.small': {
    height: blockAccent?.sizing?.small?.height,
    minWidth: blockAccent?.sizing?.small?.minWidth,
  },
  '&.accent.medium': {
    height: blockAccent?.sizing?.medium?.height,
    minWidth: blockAccent?.sizing?.medium?.minWidth,
  },
  '&.accent.large': {
    height: blockAccent?.sizing?.large?.height,
    minWidth: blockAccent?.sizing?.large?.minWidth,
  },
  '&.accent.x-large': {
    height: blockAccent?.sizing?.xLarge?.height,
    minWidth: blockAccent?.sizing?.xLarge?.minWidth,
  },
  '&.accent.xx-large': {
    height: blockAccent?.sizing?.xxLarge?.height,
    minWidth: blockAccent?.sizing?.xxLarge?.minWidth,
  },
  '&.accent.xxx-large': {
    height: blockAccent?.sizing?.xxxLarge?.height,
    minWidth: blockAccent?.sizing?.xxxLarge?.minWidth,
  },

  // ---------------------------------------------------------------------------
  // Type 2 - Default
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.default': {
    backgroundColor:
      blockDefault?.interactivity?.rest?.backgroundColor ||
      blockDefault?.base?.backgroundColor,
    borderRadius:
      blockDefault?.interactivity?.rest?.borderRadius ||
      blockDefault?.base?.borderRadius,
    borderStyle:
      blockDefault?.interactivity?.rest?.borderStyle ||
      blockDefault?.base?.borderStyle,
    borderWidth:
      blockDefault?.interactivity?.rest?.borderWidth ||
      blockDefault?.base?.borderWidth,
    borderColor:
      blockDefault?.interactivity?.rest?.borderColor ||
      blockDefault?.base?.borderColor,
  },
  '&.default:hover': {
    backgroundColor: blockDefault?.interactivity?.hover?.backgroundColor,
    borderRadius: blockDefault?.interactivity?.hover?.borderRadius,
    borderStyle: blockDefault?.interactivity?.hover?.borderStyle,
    borderWidth: blockDefault?.interactivity?.hover?.borderWidth,
    borderColor: blockDefault?.interactivity?.hover?.borderColor,
  },
  '&.default:focus': {
    backgroundColor: blockDefault?.interactivity?.focus?.backgroundColor,
    borderRadius: blockDefault?.interactivity?.focus?.borderRadius,
    borderStyle: blockDefault?.interactivity?.focus?.borderStyle,
    borderWidth: blockDefault?.interactivity?.focus?.borderWidth,
    borderColor: blockDefault?.interactivity?.focus?.borderColor,
  },
  '&.default:pressed': {
    backgroundColor: blockDefault?.interactivity?.pressed?.backgroundColor,
    borderRadius: blockDefault?.interactivity?.pressed?.borderRadius,
    borderStyle: blockDefault?.interactivity?.pressed?.borderStyle,
    borderWidth: blockDefault?.interactivity?.pressed?.borderWidth,
    borderColor: blockDefault?.interactivity?.pressed?.borderColor,
  },
  '&.default:visited': {
    backgroundColor: blockDefault?.interactivity?.visited?.backgroundColor,
    borderRadius: blockDefault?.interactivity?.visited?.borderRadius,
    borderStyle: blockDefault?.interactivity?.visited?.borderStyle,
    borderWidth: blockDefault?.interactivity?.visited?.borderWidth,
    borderColor: blockDefault?.interactivity?.visited?.borderColor,
  },

  // Validation
  '&.default.disabled': {
    backgroundColor: blockAccent?.validation?.disabled?.backgroundColor,
    borderRadius: blockAccent?.validation?.disabled?.borderRadius,
    borderStyle: blockAccent?.validation?.disabled?.borderStyle,
    borderWidth: blockAccent?.validation?.disabled?.borderWidth,
    borderColor: blockAccent?.validation?.disabled?.borderColor,
  },

  // Sizing
  '&.default.xxx-small': {
    height: blockDefault?.sizing?.xxxSmall?.height,
    minWidth: blockDefault?.sizing?.xxxSmall?.minWidth,
  },
  '&.default.xx-small': {
    height: blockDefault?.sizing?.xxSmall?.height,
    minWidth: blockDefault?.sizing?.xxSmall?.minWidth,
  },
  '&.default.x-small': {
    height: blockDefault?.sizing?.xSmall?.height,
    minWidth: blockDefault?.sizing?.xSmall?.minWidth,
  },
  '&.default.small': {
    height: blockDefault?.sizing?.small?.height,
    minWidth: blockDefault?.sizing?.small?.minWidth,
  },
  '&.default.medium': {
    height: blockDefault?.sizing?.medium?.height,
    minWidth: blockDefault?.sizing?.medium?.minWidth,
  },
  '&.default.large': {
    height: blockDefault?.sizing?.large?.height,
    minWidth: blockDefault?.sizing?.large?.minWidth,
  },
  '&.default.x-large': {
    height: blockDefault?.sizing?.xLarge?.height,
    minWidth: blockDefault?.sizing?.xLarge?.minWidth,
  },
  '&.default.xx-large': {
    height: blockDefault?.sizing?.xxLarge?.height,
    minWidth: blockDefault?.sizing?.xxLarge?.minWidth,
  },
  '&.default.xxx-large': {
    height: blockDefault?.sizing?.xxxLarge?.height,
    minWidth: blockDefault?.sizing?.xxxLarge?.minWidth,
  },

  // ---------------------------------------------------------------------------
  // Type 3 - Text
  // ---------------------------------------------------------------------------

  // Interactivity
  '&.text': {
    backgroundColor:
      blockText?.interactivity?.rest?.backgroundColor ||
      blockText?.base?.backgroundColor,
    borderRadius:
      blockText?.interactivity?.rest?.borderRadius ||
      blockText?.base?.borderRadius,
    borderStyle:
      blockText?.interactivity?.rest?.borderStyle ||
      blockText?.base?.borderStyle,
    borderWidth:
      blockText?.interactivity?.rest?.borderWidth ||
      blockText?.base?.borderWidth,
    borderColor:
      blockText?.interactivity?.rest?.borderColor ||
      blockText?.base?.borderColor,
  },
  '&.text:hover': {
    backgroundColor: blockText?.interactivity?.hover?.backgroundColor,
    borderRadius: blockText?.interactivity?.hover?.borderRadius,
    borderStyle: blockText?.interactivity?.hover?.borderStyle,
    borderWidth: blockText?.interactivity?.hover?.borderWidth,
    borderColor: blockText?.interactivity?.hover?.borderColor,
  },
  '&.text:focus': {
    backgroundColor: blockText?.interactivity?.focus?.backgroundColor,
    borderRadius: blockText?.interactivity?.focus?.borderRadius,
    borderStyle: blockText?.interactivity?.focus?.borderStyle,
    borderWidth: blockText?.interactivity?.focus?.borderWidth,
    borderColor: blockText?.interactivity?.focus?.borderColor,
  },
  '&.text:pressed': {
    backgroundColor: blockText?.interactivity?.pressed?.backgroundColor,
    borderRadius: blockText?.interactivity?.pressed?.borderRadius,
    borderStyle: blockText?.interactivity?.pressed?.borderStyle,
    borderWidth: blockText?.interactivity?.pressed?.borderWidth,
  },
  '&.text:visited': {
    backgroundColor: blockText?.interactivity?.visited?.backgroundColor,
    borderRadius: blockText?.interactivity?.visited?.borderRadius,
    borderStyle: blockText?.interactivity?.visited?.borderStyle,
    borderWidth: blockText?.interactivity?.visited?.borderWidth,
    borderColor: blockText?.interactivity?.visited?.borderColor,
  },

  // Validation
  '&.text.disabled': {
    backgroundColor: blockText?.validation?.disabled?.backgroundColor,
    borderRadius: blockText?.validation?.disabled?.borderRadius,
    borderStyle: blockText?.validation?.disabled?.borderStyle,
    borderWidth: blockText?.validation?.disabled?.borderWidth,
    borderColor: blockText?.validation?.disabled?.borderColor,
  },

  // Sizing
  '&.text.xxx-small': {
    height: blockText?.sizing?.xxxSmall?.height,
    minWidth: blockText?.sizing?.xxxSmall?.minWidth,
  },
  '&.text.xx-small': {
    height: blockText?.sizing?.xxSmall?.height,
    minWidth: blockText?.sizing?.xxSmall?.minWidth,
  },
  '&.text.x-small': {
    height: blockText?.sizing?.xSmall?.height,
    minWidth: blockText?.sizing?.xSmall?.minWidth,
  },
  '&.text.small': {
    height: blockText?.sizing?.small?.height,
    minWidth: blockText?.sizing?.small?.minWidth,
  },
  '&.text.medium': {
    height: blockText?.sizing?.medium?.height,
    minWidth: blockText?.sizing?.medium?.minWidth,
  },
  '&.text.large': {
    height: blockText?.sizing?.large?.height,
    minWidth: blockText?.sizing?.large?.minWidth,
  },
  '&.text.x-large': {
    height: blockText?.sizing?.xLarge?.height,
    minWidth: blockText?.sizing?.xLarge?.minWidth,
  },
  '&.text.xx-large': {
    height: blockText?.sizing?.xxLarge?.height,
    minWidth: blockText?.sizing?.xxLarge?.minWidth,
  },
  '&.text.xxx-large': {
    height: blockText?.sizing?.xxxLarge?.height,
    minWidth: blockText?.sizing?.xxxLarge?.minWidth,
  },
});

export default BlockElement;
