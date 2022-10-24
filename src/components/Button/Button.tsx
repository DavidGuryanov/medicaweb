import React from 'react';
import { StyledButton, ButtonTitle, styles } from './styles';
import Icon, { iconVariants } from '../Icon';

type UniversalButtonsProps = {
  onClick: () => void;
  title: string;
  primary?: boolean | undefined;
  rounded?: boolean;
  disabled?: boolean;
  dark?: boolean;
  mini?: boolean;
  iconStart?: keyof typeof iconVariants;
  iconEnd?: keyof typeof iconVariants;
  children?: JSX.Element[] | JSX.Element;
  [x: string]: unknown;
};

function Button({
  onClick,
  title,
  primary,
  rounded,
  disabled,
  dark,
  mini,
  iconStart,
  iconEnd,
  children,
  ...props
}: UniversalButtonsProps): JSX.Element {
  return (
    <StyledButton
      type="button"
      isPrimary={primary}
      isRounded={rounded}
      disabled={disabled}
      isDark={dark}
      isMini={mini}
      onClick={onClick}
      {...props}
    >
      {iconStart && <Icon type={iconStart} style={styles.iconStart} />}
      <ButtonTitle>{title}</ButtonTitle>
      {children}
      {iconEnd && <Icon type={iconEnd} style={styles.iconEnd} />}
    </StyledButton>
  );
}

export default Button;
