import React from 'react';
import { DotActive, DotPassive, StepperWrapper } from './styles';

interface IStepperProps {
  steps: number;
  current: number;
  onChange: (x: number) => void;
}

function Stepper({ steps, current, onChange }: IStepperProps) {
  const totalSteps = new Array(steps).fill(null);
  return (
    <StepperWrapper>
      {totalSteps.map((_step, ind) =>
        current === ind ? (
          <DotActive type="button" />
        ) : (
          <DotPassive
            type="button"
            onClick={() => {
              onChange(ind);
            }}
          />
        )
      )}
    </StepperWrapper>
  );
}

export default Stepper;
