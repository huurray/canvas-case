import styled from "@emotion/styled";

function Copyright({ style }) {
  return <Container style={style}>© Copyright 2022 Huurray, All rights reserved.</Container>;
}

export default Copyright;

const Container = styled.div`
  width: 100%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey500};
  text-align: center;
`;
