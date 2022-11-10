import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ReactComponent as Basket } from '../../assets/icons/busket.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Message } from '../../assets/icons/message.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Video } from '../../assets/icons/video.svg';
import { ReactComponent as BasketSecondary } from '../../assets/icons/busketSecondary.svg';
import { ReactComponent as ArrowSecondary } from '../../assets/icons/arrowSecondary.svg';
import { ReactComponent as HeartLight } from '../../assets/icons/Heart_light.svg';
import { ReactComponent as HeartDark } from '../../assets/icons/Heart_dark.svg';
import { ReactComponent as NotificationLight } from '../../assets/icons/Notification_light.svg';
import { ReactComponent as NotificationDark } from '../../assets/icons/Notification_dark.svg';
import { ReactComponent as ChipStarBlue } from '../../assets/icons/ChipStarBlue.svg';
import { ReactComponent as ChipStarWhite } from '../../assets/icons/ChipStarWhite.svg';
import { ReactComponent as CloseSquareBlue } from '../../assets/icons/CloseSquareBlue.svg';
import { ReactComponent as CloseSquareWhite } from '../../assets/icons/CloseSquareWhite.svg';

export const iconVariants = {
  basket: Basket,
  arrow: Arrow,
  play: Play,
  message: Message,
  phone: Phone,
  video: Video,
  basketSecondary: BasketSecondary,
  arrowSecondary: ArrowSecondary,
  heart: { light: HeartLight, dark: HeartDark },
  notification: { light: NotificationLight, dark: NotificationDark },
  chipStar: ChipStarWhite,
  cross: CloseSquareWhite,
  chipStarSec: ChipStarBlue,
  crossSec: CloseSquareBlue,
} as const;

interface TIconProps {
  type: keyof typeof iconVariants;
  [x: string]: unknown;
}

type ThemedIcons = {
  readonly light: React.FC;
  readonly dark: React.FC;
};

function Icon({ type, ...props }: TIconProps): JSX.Element {
  const colorScheme = useContext(ThemeContext).type;
  const iconWithThemes = iconVariants[type] as unknown as ThemedIcons;
  const iconWithout = iconVariants[type] as unknown as React.FC;
  const IconComponent = iconWithThemes[colorScheme] || iconWithout;

  return <IconComponent {...props} />;
}

export default Icon;
