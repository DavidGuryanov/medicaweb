import styled, {css} from 'styled-components';

export const StyledChips = styled.button<{
  isPrimary?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
 }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ isPrimary, theme }) =>
  isPrimary ? theme.palette.primary.p500 : 'transparent'};
  border-radius: 100px;
  min-width: 97px;
  width: min-content;
  padding: 10px 24px;
  height: 45px;
  border: ${({ isPrimary }) => (isPrimary ? 'none' : '2px solid #246BFD')};

  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  ${props => props.isMedium && css` 
    min-width: ${props.isMedium && '83px'};
    height: ${props.isMedium && '38px'};
    padding: 8px 20px;
    font-weight: 600;
    font-size: 16px;
  `}

  ${props => props.isSmall && css` 
  min-width: ${props.isSmall && '69px'};
  height: ${props.isSmall && '32px'};
  padding: 6px 16px;
  font-weight: 600;
  font-size: 14px;
`}
  
  color: ${({ isPrimary, theme }) =>
  isPrimary ? theme.palette.others.white : theme.palette.primary.p500};
`;

export const styles = {
  iconStart: {
    marginRight: '2.5%',
  },
  iconEnd: {
    marginLeft: '2.5%',
  },
};

export default StyledChips;
