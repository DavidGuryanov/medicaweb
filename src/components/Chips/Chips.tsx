import React from 'react';
import styles, {StyledChips} from './styles';
import Icon, { iconVariants } from '../Icon';

type ChipsProps = {
    onClick: () => void;
    title: string;
    primary?: boolean;
    medium?: boolean;
    small?: boolean;
    children?: JSX.Element[] | JSX.Element;
    iconStart?: keyof typeof iconVariants;
    iconEnd?: keyof typeof iconVariants;
    [x: string]: unknown;
}

function Chips({
    onClick,
    title,
    children,
    primary,
    medium,
    small,
    iconStart,
    iconEnd,
    ...props
  }: ChipsProps): JSX.Element {
    return (
      <StyledChips
        type="button"
        isPrimary={primary}
        isMedium={medium}
        isSmall={small}
        onClick={onClick}
        {...props}
      >
        {iconStart && <Icon type={iconStart} style={styles.iconStart} />}
        {title}
        {children}
        {iconEnd && <Icon type={iconEnd} style={styles.iconEnd} />}
      </StyledChips>
    );
  }
  
  export default Chips;