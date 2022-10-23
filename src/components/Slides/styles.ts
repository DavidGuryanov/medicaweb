import styled from 'styled-components';

export const SlideImage = styled.img`
  width: 100%;
`;

export const SlidesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  box-sizing: border-box;
`;

export const SlideText = styled.h4`
  ${(props) => ({
    ...props.theme.colorSchemes.pr500_d1,
    ...props.theme.textVariants.h2,
  })}
  text-align: center;
  margin: 0;
`;

export const SlidesControlls = styled.div`
  padding: 24px;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 48px;

  justify-content: space-around;
`;
