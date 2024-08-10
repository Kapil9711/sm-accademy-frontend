import styled from "styled-components";

const SmallButton = styled.button`
  background-color: hsl(11, 99%, 66%);
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  outline: none;
  padding-block: 8px;
  padding-inline: 16px;
  max-width: 134px;
`;

const MediumButton = styled.button`
  background-color: hsl(11, 99%, 66%);
  border-radius: 50px;
  color: white;
  padding-block: 16px;
  padding-inline: 32px;
`;

const LargeButton = styled.button`
  background-color: hsl(11, 99%, 66%);
  border-radius: 10px;
  color: white;
  padding-block: 16px;
  padding-inline: 32px;
`;

export { SmallButton, MediumButton, LargeButton };
