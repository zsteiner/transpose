'use client';
import { createContext, ReactNode } from 'react';
import { ActorRefFrom } from 'xstate';
import { useActorRef } from '@xstate/react';

import { transposeMachine, TransposeMachineInput } from './machine';

// Create a context for the machine actor
export const TransposeMachineContext = createContext<ActorRefFrom<
  typeof transposeMachine
> | null>(null);

type TransposeMachineProviderProps = {
  children: ReactNode;
  initialState?: TransposeMachineInput;
};

export const TransposeMachineProvider = ({
  children,
  initialState,
}: TransposeMachineProviderProps) => {
  const machine = useActorRef(transposeMachine, {
    input: initialState,
  });

  return (
    <TransposeMachineContext.Provider value={machine}>
      {children}
    </TransposeMachineContext.Provider>
  );
};
