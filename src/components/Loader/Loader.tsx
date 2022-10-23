import React from 'react';
import { Rotate } from './styles';

function AnimatedLoader({ isLoading }: { isLoading: boolean }) {
  return <Rotate width={60} height={60} isLoading={isLoading} />;
}

export default AnimatedLoader;
