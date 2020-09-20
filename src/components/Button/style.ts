import styled from 'styled-components';
import whitelabel from '../../whitelabel-beta-material';

// const sizeExist = whitelabel?.button?.size;
// if (sizeExist) {
//   Object.keys(sizeExist).forEach((size) => {
//     const sizeAttributeExist = sizeExist[size as ButtonSizeAttribute];
//     if (sizeAttributeExist) {
//       Object.keys(sizeAttributeExist).forEach((status) => {
//         const statusExist = sizeAttributeExist[status as ButtonStatusAttribute];
//         if (statusExist) {
//           Object.keys(statusExist).forEach((element) => {
//             const elementExist =
//               statusExist[element as ButtonElementsAttributes];
//             if (elementExist) {
//               Object.keys(elementExist).forEach((property) => {
//                 if (property === 'lineHeight') {
//                   if (elementExist[property]) {
//                     elementExist[property] = `${elementExist[property]}px`;
//                   }
//                 }
//               });
//             }
//           });
//         }
//       });
//     }
//   });
// }

export const StyledButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  transition: 'all ease-in 0.2s',

  // ---------------------------------------------------------------------------
  // Type 1
  // ---------------------------------------------------------------------------

  // interactivity
  '&.type1': whitelabel?.button?.type1?.block?.interactivity?.rest,
  '&.type1:hover': whitelabel?.button?.type1?.block?.interactivity?.hover,
  '&.type1:focus': whitelabel?.button?.type1?.block?.interactivity?.focus,
  '&.type1:pressed': whitelabel?.button?.type1?.block?.interactivity?.pressed,
  '&.type1:visited': whitelabel?.button?.type1?.block?.interactivity?.visited,

  // Validation
  '&.type1.disabled': whitelabel?.button?.type1?.block?.validation?.disabled,

  // ---------------------------------------------------------------------------
  // Type 2
  // ---------------------------------------------------------------------------

  '&.type2': whitelabel?.button?.type2?.block?.interactivity?.rest,
  '&.type2:hover': whitelabel?.button?.type2?.block?.interactivity?.hover,
  '&.type2:focus': whitelabel?.button?.type2?.block?.interactivity?.focus,
  '&.type2:pressed': whitelabel?.button?.type2?.block?.interactivity?.pressed,
  '&.type2:visited': whitelabel?.button?.type2?.block?.interactivity?.visited,

  // Validation
  '&.type2.disabled': whitelabel?.button?.type2?.block?.validation?.disabled,

  // ---------------------------------------------------------------------------
  // Type 3
  // ---------------------------------------------------------------------------

  '&.type3': whitelabel?.button?.type3?.block?.interactivity?.rest,
  '&.type3:hover': whitelabel?.button?.type3?.block?.interactivity?.hover,
  '&.type3:focus': whitelabel?.button?.type3?.block?.interactivity?.focus,
  '&.type3:pressed': whitelabel?.button?.type3?.block?.interactivity?.pressed,
  '&.type3:visited': whitelabel?.button?.type3?.block?.interactivity?.visited,

  // Validation
  '&.type3.disabled': whitelabel?.button?.type3?.block?.validation?.disabled,

  // '&.default': whitelabel?.button?.type?.default?.rest?.button,
  // '&.default': whitelabel?.button?.type?.default?.rest?.button,
  // '&.default:hover': whitelabel?.button?.type?.default?.hover?.button,
  // '&.default:focus': whitelabel?.button?.type?.default?.focus?.button,
  // '&.default:pressed': whitelabel?.button?.type?.default?.pressed?.button,
  // '&.default.disabled': whitelabel?.button?.type?.default?.disabled?.button,
  //
  // '&.text': whitelabel?.button?.type?.text?.rest?.button,
  // '&.text:hover': whitelabel?.button?.type?.text?.hover?.button,
  // '&.text:focus': whitelabel?.button?.type?.text?.focus?.button,
  // '&.text:pressed': whitelabel?.button?.type?.text?.pressed?.button,
  // '&.text.disabled': whitelabel?.button?.type?.text?.disabled?.button,

  // ---------------------------------------------------------------------------
  // Size
  // ---------------------------------------------------------------------------

  // '&.xxx-small': whitelabel?.button?.size?.xxxSmall?.rest?.button,
  // '&.xx-small': whitelabel?.button?.size?.xxSmall?.rest?.button,
  // '&.x-small': whitelabel?.button?.size?.xSmall?.rest?.button,
  // '&.small': whitelabel?.button?.size?.small?.rest?.button,
  '&.medium': whitelabel?.button?.type1?.block?.sizing.medium,
  // '&.large': whitelabel?.button?.size?.large?.rest?.button,
  // '&.x-large': whitelabel?.button?.size?.xLarge?.rest?.button,
  // '&.xx-large': whitelabel?.button?.size?.xxLarge?.rest?.button,
  // '&.xxx-large': whitelabel?.button?.size?.xxxLarge?.rest?.button,
});

export const StyledText = styled.span({
  // ---------------------------------------------------------------------------
  // Type 1
  // ---------------------------------------------------------------------------

  // interactivity
  '&.type1': whitelabel?.button?.type1?.text?.interactivity?.rest,
  '&.type1:hover': whitelabel?.button?.type1?.text?.interactivity?.hover,
  '&.type1:focus': whitelabel?.button?.type1?.text?.interactivity?.focus,
  '&.type1:pressed': whitelabel?.button?.type1?.text?.interactivity?.pressed,
  '&.type1:visited': whitelabel?.button?.type1?.text?.interactivity?.visited,
  //
  // // Validation
  '&.type1.disabled': whitelabel?.button?.type1?.text?.validation?.disabled,

  // ---------------------------------------------------------------------------
  // Type 2
  // ---------------------------------------------------------------------------

  // interactivity
  '&.type2': whitelabel?.button?.type2?.text?.interactivity?.rest,
  '&.type2:hover': whitelabel?.button?.type2?.text?.interactivity?.hover,
  '&.type2:focus': whitelabel?.button?.type2?.text?.interactivity?.focus,
  '&.type2:pressed': whitelabel?.button?.type2?.text?.interactivity?.pressed,
  '&.type2:visited': whitelabel?.button?.type2?.text?.interactivity?.visited,

  // Validation
  '&.type2.disabled': whitelabel?.button?.type2?.text?.validation?.disabled,

  //
  // '&.default': whitelabel?.button?.type?.default?.rest?.text,
  // '&.default:hover': whitelabel?.button?.type?.default?.hover?.text,
  // '&.default:focus': whitelabel?.button?.type?.default?.focus?.text,
  // '&.default:pressed': whitelabel?.button?.type?.default?.pressed?.text,
  // '&.default.disabled': whitelabel?.button?.type?.default?.disabled?.text,
  //
  // '&.text': whitelabel?.button?.type?.text?.rest?.text,
  // '&.text:hover': whitelabel?.button?.type?.text?.hover?.text,
  // '&.text:focus': whitelabel?.button?.type?.text?.focus?.text,
  // '&.text:pressed': whitelabel?.button?.type?.text?.pressed?.text,
  // '&.text.disabled': whitelabel?.button?.type?.text?.disabled?.text,

  // ---------------------------------------------------------------------------
  // Size
  // ---------------------------------------------------------------------------

  // '&.xxx-small': whitelabel?.button?.size?.xxxSmall?.rest?.text,
  // '&.xx-small': whitelabel?.button?.size?.xxSmall?.rest?.text,
  // '&.x-small': whitelabel?.button?.size?.xSmall?.rest?.text,
  // '&.small': whitelabel?.button?.size?.small?.rest?.text,
  '&.medium': {
    ...whitelabel?.button?.type1?.text?.sizing.medium,
    lineHeight: `${whitelabel?.button?.type1?.text?.sizing.medium.lineHeight}px`,
  },
  // '&.large': whitelabel?.button?.size?.large?.rest?.text,
  // '&.x-large': whitelabel?.button?.size?.xLarge?.rest?.text,
  // '&.xx-large': whitelabel?.button?.size?.xxLarge?.rest?.text,
  // '&.xxx-large': whitelabel?.button?.size?.xxxLarge?.rest?.text,
});
