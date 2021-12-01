import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useTransition, animated } from "@react-spring/web";
// styles
import { GitHub } from "react-feather";

function Header() {
  const [open, setOpen] = useState(false);

  const transitionA = useTransition(open, {
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    delay: 400,
  });

  const transitionB = useTransition(open, {
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    delay: 600,
  });

  const transitionC = useTransition(open, {
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    delay: 800,
  });

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Container>
      {transitionA((style) => (
        <animated.div style={style}>
          <Title>CANVAS CASE.</Title>
        </animated.div>
      ))}
      {transitionB((style) => (
        <animated.div style={style}>
          <Description>
            A collection of interactive designs using HTML Canvas that has been recreated with many
            references.
          </Description>
        </animated.div>
      ))}
      {transitionC((style) => (
        <animated.div style={style}>
          <GithubDescription href="https://github.com/huurray/canvas-case">
            <GitHub />
            <p>Code is here</p>
          </GithubDescription>
        </animated.div>
      ))}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  padding: 6rem 4rem 4.5rem 4rem;
`;
const Title = styled.h1`
  font-size: 6.5rem;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 800;
  margin-bottom: 2rem;
`;
const Description = styled.p`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.grey500};
  line-height: 1.46;
  margin-bottom: 1.2rem;
`;
const GithubDescription = styled.a`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.green};
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 1.9rem;
    height: 1.9rem;
    margin-right: 0.4rem;
    margin-top: -0.3rem;
  }

  &:hover {
    p {
      text-decoration: underline;
    }
  }
`;
