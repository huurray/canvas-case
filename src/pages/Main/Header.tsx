import styled from "@emotion/styled";
// styles
import { GitHub } from "react-feather";

function Header() {
  return (
    <Container>
      <Title>CANVAS CASE.</Title>
      <Description>
        This is a collection of interactions using HTML5 Canvas that I made.
        <br />
        And it has been recreated with references from many places.
      </Description>
      <GithubDescription href="https://github.com/huurray/canvas-case">
        <GitHub />
        <p>Link to Github.</p>
      </GithubDescription>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  padding: 6rem 4rem 4rem 4rem;
`;
const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.grey700};
  font-weight: 800;
  margin-bottom: 2rem;
`;
const Description = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.grey500};
  line-height: 1.46;
  margin-bottom: 3rem;
`;
const GithubDescription = styled.a`
  font-size: 2.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey600};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    p {
      text-decoration: underline;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 0.4rem;
    margin-top: -0.3rem;
  }
`;
