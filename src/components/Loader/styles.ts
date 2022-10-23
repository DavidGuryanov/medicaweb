import styled, { keyframes } from 'styled-components';
import { ReactComponent as Loader } from '../../assets/icons/loader.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled(Loader)<{ isLoading: boolean }>`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  animation-play-state: ${({ isLoading }) =>
    isLoading ? 'running' : 'paused'};
`;

export const Wrapper = styled.div``;
