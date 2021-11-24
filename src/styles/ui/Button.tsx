/* eslint-disable */
import React from "react";
import styled from "@emotion/styled";

interface IProps {
  full?: boolean;
  size?: "medium" | "large" | "xLarge";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}
function Button({ full, size, style, children, ...props }: IProps) {
  return (
    <Container full={full} size={size} style={style} {...props}>
      {children}
    </Container>
  );
}

export default Button;

const Container = styled.button<{ size?: string; full?: boolean }>`
  width: ${({ full }) => (full ? "100%" : "fit-content")};
  background-color: red;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;

  padding: ${({ size }) => {
    switch (size) {
      case "xLarge":
        return "0 20px";
      case "large":
        return "0 20px";
      default:
        return "0 16px";
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case "xLarge":
        return "60px";
      case "large":
        return "50px";
      default:
        return "36px";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "xLarge":
        return "18px";
      case "large":
        return "18px";
      default:
        return "12px";
    }
  }};
`;
