import React from 'react';
import { ThingsProvider } from './ThingsContext';

/**
 * @description
 * Global configuration file for context providers
 */

export const AppProviders: React.FunctionComponent = ({ children }) => {
  return (
    <ThingsProvider>{children}</ThingsProvider>
  );
};
