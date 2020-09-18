import styled from 'styled-components';
import whitelabel from '../../whitelabel-fluent';
import {
  ButtonElementsAttributes,
  ButtonSizeAttribute,
  ButtonStatusAttribute,
} from '../../whitelabel';

const baseExist = whitelabel?.button?.base;
if (baseExist) {
  Object.keys(baseExist).forEach((element) => {
    const elementExist = baseExist[element as ButtonElementsAttributes];
    if (elementExist) {
      Object.keys(elementExist).forEach((property) => {
        if (property === 'lineHeight') {
          if (elementExist[property]) {
            elementExist[property] = `${elementExist[property]}px`;
          }
        }
      });
    }
  });
}

const sizeExist = whitelabel?.button?.size;
if (sizeExist) {
  Object.keys(sizeExist).forEach((size) => {
    const sizeAttributeExist = sizeExist[size as ButtonSizeAttribute];
    if (sizeAttributeExist) {
      Object.keys(sizeAttributeExist).forEach((status) => {
        const statusExist = sizeAttributeExist[status as ButtonStatusAttribute];
        if (statusExist) {
          Object.keys(statusExist).forEach((element) => {
            const elementExist =
              statusExist[element as ButtonElementsAttributes];
            if (elementExist) {
              Object.keys(elementExist).forEach((property) => {
                if (property === 'lineHeight') {
                  if (elementExist[property]) {
                    elementExist[property] = `${elementExist[property]}px`;
                  }
                }
              });
            }
          });
        }
      });
    }
  });
}

export const StyledButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: 0,

  // ---------------------------------------------------------------------------
  // Type
  // ---------------------------------------------------------------------------

  ...whitelabel?.button?.base?.button,

  '&.accent': whitelabel?.button?.type?.accent?.rest?.button,
  '&.accent:hover': whitelabel?.button?.type?.accent?.hover?.button,
  '&.accent:focus': whitelabel?.button?.type?.accent?.focus?.button,
  '&.accent:pressed': whitelabel?.button?.type?.accent?.pressed?.button,
  '&.accent.disabled': whitelabel?.button?.type?.accent?.disabled?.button,

  '&.default': whitelabel?.button?.type?.default?.rest?.button,
  '&.default:hover': whitelabel?.button?.type?.default?.hover?.button,
  '&.default:focus': whitelabel?.button?.type?.default?.focus?.button,
  '&.default:pressed': whitelabel?.button?.type?.default?.pressed?.button,
  '&.default.disabled': whitelabel?.button?.type?.default?.disabled?.button,

  '&.text': whitelabel?.button?.type?.text?.rest?.button,
  '&.text:hover': whitelabel?.button?.type?.text?.hover?.button,
  '&.text:focus': whitelabel?.button?.type?.text?.focus?.button,
  '&.text:pressed': whitelabel?.button?.type?.text?.pressed?.button,
  '&.text.disabled': whitelabel?.button?.type?.text?.disabled?.button,

  // ---------------------------------------------------------------------------
  // Size
  // ---------------------------------------------------------------------------

  '&.xxx-small': whitelabel?.button?.size?.xxxSmall?.rest?.button,
  '&.xx-small': whitelabel?.button?.size?.xxSmall?.rest?.button,
  '&.x-small': whitelabel?.button?.size?.xSmall?.rest?.button,
  '&.small': whitelabel?.button?.size?.small?.rest?.button,
  '&.medium': whitelabel?.button?.size?.medium?.rest?.button,
  '&.large': whitelabel?.button?.size?.large?.rest?.button,
  '&.x-large': whitelabel?.button?.size?.xLarge?.rest?.button,
  '&.xx-large': whitelabel?.button?.size?.xxLarge?.rest?.button,
  '&.xxx-large': whitelabel?.button?.size?.xxxLarge?.rest?.button,
});

export const StyledText = styled.span({
  fontFamily: '"Segoe UI", serif',
  fontStyle: 'normal',
  fontWeight: 'normal',

  // ---------------------------------------------------------------------------
  // Type
  // ---------------------------------------------------------------------------

  ...whitelabel?.button?.base?.text,

  '&.accent': whitelabel?.button?.type?.accent?.rest?.text,
  '&.accent:hover': whitelabel?.button?.type?.accent?.hover?.text,
  '&.accent:focus': whitelabel?.button?.type?.accent?.focus?.text,
  '&.accent:pressed': whitelabel?.button?.type?.accent?.pressed?.text,
  '&.accent.disabled': whitelabel?.button?.type?.accent?.disabled?.text,

  '&.default': whitelabel?.button?.type?.default?.rest?.text,
  '&.default:hover': whitelabel?.button?.type?.default?.hover?.text,
  '&.default:focus': whitelabel?.button?.type?.default?.focus?.text,
  '&.default:pressed': whitelabel?.button?.type?.default?.pressed?.text,
  '&.default.disabled': whitelabel?.button?.type?.default?.disabled?.text,

  '&.text': whitelabel?.button?.type?.text?.rest?.text,
  '&.text:hover': whitelabel?.button?.type?.text?.hover?.text,
  '&.text:focus': whitelabel?.button?.type?.text?.focus?.text,
  '&.text:pressed': whitelabel?.button?.type?.text?.pressed?.text,
  '&.text.disabled': whitelabel?.button?.type?.text?.disabled?.text,

  // ---------------------------------------------------------------------------
  // Size
  // ---------------------------------------------------------------------------

  '&.xxx-small': whitelabel?.button?.size?.xxxSmall?.rest?.text,
  '&.xx-small': whitelabel?.button?.size?.xxSmall?.rest?.text,
  '&.x-small': whitelabel?.button?.size?.xSmall?.rest?.text,
  '&.small': whitelabel?.button?.size?.small?.rest?.text,
  '&.medium': whitelabel?.button?.size?.medium?.rest?.text,
  '&.large': whitelabel?.button?.size?.large?.rest?.text,
  '&.x-large': whitelabel?.button?.size?.xLarge?.rest?.text,
  '&.xx-large': whitelabel?.button?.size?.xxLarge?.rest?.text,
  '&.xxx-large': whitelabel?.button?.size?.xxxLarge?.rest?.text,
});
