import styled from 'styled-components';
import whitelabel from '../../json/legacy/whitelabel-beta-fluent';

export const StyledInput = styled.input({
  display: 'block',
  paddingTop: 0,
  paddingBottom: 0,

  // '&.type1': whitelabel?.textFieldBox?.type1?.input?.interactivity?.rest,
  // '&.medium': whitelabel?.textFieldBox?.type1?.input?.sizing.medium,
});

export const StyledLabel = styled.label({
  fontSize: 12,
});
