import styled from 'styled-components';

export const DotActive = styled.button`
  width: 4rem;
  height: 1rem;
  background: linear-gradient(286.17deg, #246bfd 0%, #5089ff 100%);
  border-radius: 100px;
  border: none;
  padding: 0;
`;
export const DotPassive = styled.button`
  width: 1rem;
  height: 1rem;
  background: #e0e0e0;
  border-radius: 100px;
  border: none;
  padding: 0;
`;

export const StepperWrapper = styled.nav`
  display: flex;
  justify-content: center;
  column-gap: 8px;
  flex-grow: 2;
`;
