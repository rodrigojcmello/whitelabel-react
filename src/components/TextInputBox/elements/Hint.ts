import styled from 'styled-components';
import styledConfig from '../../../json/json';

const labelLabelOnTop = styledConfig.textInputBox?.labelOnTop?.input;

const HintElement = styled.span({
  fontSize: labelLabelOnTop?.base?.fontSize,
  fontFamily: labelLabelOnTop?.base?.fontFamily,
});

export default HintElement;
