import React, { useEffect, useState } from 'react';

import {
  LoaderWrapper,
  LogoText,
  LogoWrapper,
  WelcomeImage,
  WelcomeSubtext,
  WelcomeText,
  WelcomeTextWrapper,
  WelcomeWrapper,
  Wrapper,
} from './styles';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import AnimatedLoader from '../../components/Loader';
import welcomeImg from '../../assets/images/welcome.png';
import Slides from '../../components/Slides';

enum STEPS {
  loading = 0,
  welcome = 1,
  slides = 2,
}

function Onboarding() {
  const [step, setStep] = useState(STEPS.loading);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(STEPS.welcome);
      setTimeout(() => {
        setStep(STEPS.slides);
      }, 2500);
    }, 2500);
  }, []);

  const getStepComponent = {
    [STEPS.loading]: (
      <LoaderWrapper>
        <LogoWrapper>
          <Logo width={60} height={60} />
          <LogoText>Medica</LogoText>
        </LogoWrapper>
        <AnimatedLoader isLoading={loading} />
      </LoaderWrapper>
    ),
    [STEPS.welcome]: (
      <WelcomeWrapper>
        <WelcomeImage src={welcomeImg} alt="Welcome" />
        <WelcomeTextWrapper>
          <WelcomeText>Welcome to Medica! 👋</WelcomeText>
          <WelcomeSubtext>
            The best online doctor appointment & consultation app of the century
            for your health and medical needs!
          </WelcomeSubtext>
        </WelcomeTextWrapper>
      </WelcomeWrapper>
    ),
    [STEPS.slides]: <Slides />,
  };

  return <Wrapper>{getStepComponent[step]}</Wrapper>;
}

export default Onboarding;
