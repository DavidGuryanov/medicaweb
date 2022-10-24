import styled from 'styled-components';

export const StyledButton = styled.button<{
  isPrimary?: boolean;
  isRounded?: boolean;
  disabled?: boolean;
  isDark?: boolean;
  isMini?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 58px;
  background-color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.palette.primary.p500 : theme.palette.primary.p100};
  border-radius: ${({ isRounded }) => (isRounded ? '100px' : '16px')};
  width: ${({ isMini }) => (isMini ? '45%' : '100%')};
  border: none;
  /* opacity: ${({ disabled }) => disabled && 0.35}; */
  color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.palette.others.white : theme.palette.primary.p500};
  :hover {
    opacity: 0.85;
  }
  cursor: pointer;
`;

export const ButtonTitle = styled.p`
  font-size: 16;
`;

export const styles = {
  iconStart: {
    marginRight: '2.5%',
  },
  iconEnd: {
    marginLeft: '2.5%',
  },
};
