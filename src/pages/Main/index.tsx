import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Container>
      <Link to="/bounce-ball">
        <h1>BounceBall</h1>
      </Link>
      <Link to="/rotate-box">
        <h1>RotateBox</h1>
      </Link>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.beige};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 24px;
    line-height: 1.6;
    &:hover {
      text-decoration: underline;
    }
  }
`;
