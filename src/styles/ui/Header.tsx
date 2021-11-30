/* eslint-disable */
import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";
// styles
import { ArrowLeft } from "react-feather";

interface IProps {
  style?: React.CSSProperties;
  whiteBackIcon?: boolean;
}
function Header({ whiteBackIcon, style }: IProps) {
  const navigate = useNavigate();
  return (
    <Container style={style}>
      <ArrowLeft
        onClick={() => navigate(-1)}
        style={{ color: whiteBackIcon ? "#fff" : undefined }}
      />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: unset;
  height: ${({ theme }) => theme.sizes.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  svg {
    height: 100%;
    padding: 0 2rem;
    cursor: pointer;
  }
`;
