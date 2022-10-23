import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 428px;
  margin: 0 auto;
  height: 100%;
  ${({ theme }) => ({
    ...theme.colorSchemes.white_d3,
    ...theme.transition,
  })}
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70%;
`;

export const LogoText = styled.h1`
  ${(props) => ({
    ...props.theme.colorSchemes.g900_white,
    ...props.theme.textVariants.h1,
  })}
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeImage = styled.img``;

export const WelcomeTextWrapper = styled.div`
  padding: 24px;
`;

export const WelcomeText = styled.h1`
  ${(props) => ({
    ...props.theme.colorSchemes.pr500_d1,
    ...props.theme.textVariants.h1,
  })}
  text-align: center;
`;

export const WelcomeSubtext = styled.h4`
  ${(props) => ({
    ...props.theme.colorSchemes.g900_white,
    ...props.theme.textVariants.p_L.medium,
  })}
  text-align: center;
`;
