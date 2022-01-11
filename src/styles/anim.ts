import { keyframes } from "@emotion/react";

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-2px, 0, -2px);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 2px);
  }
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 2px);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 2px);
  }
`;

export const fadeIn = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

export const fadeOut = keyframes`
  70% {
      opacity: 1;
  }
  100% {
      opacity: 0;
  }
`;
