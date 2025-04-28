import React, { ReactNode } from 'react';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

interface GoogleAnalyticsWrapperProps {
  children: ReactNode;
}

export const GoogleAnalyticsWrapper: React.FC<GoogleAnalyticsWrapperProps> = ({ 
  children 
}) => {
  useGoogleAnalytics();
  
  return <>{children}</>;
}; 