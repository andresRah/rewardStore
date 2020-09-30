import styled from "styled-components";

export const Svg = styled.svg`
  cursor: ${(props) => (props?.disabled ? "no-drop" : "pointer")};
`;
