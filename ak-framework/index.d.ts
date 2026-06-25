import * as React from 'react';

export interface AkIconProps extends React.HTMLAttributes<HTMLElement> {
  set?: string;
  name: string;
  size?: string;
  color?: string;
  stroke?: string;
  className?: string;
}

/**
 * Custom offline-first customizable SVG icon component.
 */
export const AkIcon: React.FC<AkIconProps>;

/**
 * Custom Toast trigger library. Includes auto-dismissal and animated progress timers.
 */
export const akToast: {
  success: (message: string, title?: string, duration?: number) => void;
  danger: (message: string, title?: string, duration?: number) => void;
  warning: (message: string, title?: string, duration?: number) => void;
  info: (message: string, title?: string, duration?: number) => void;
};

/**
 * Promise-based custom modal dialogues replacing standard window dialogs.
 */
export const akDialog: {
  alert: (message: string, title?: string) => Promise<void>;
  confirm: (message: string, title?: string) => Promise<boolean>;
  prompt: (message: string, defaultValue?: string, title?: string) => Promise<string | null>;
};
