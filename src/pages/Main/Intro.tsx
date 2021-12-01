import styled from "@emotion/styled";
import { animated } from "@react-spring/web";
// components
import Copyright from "./Copyright";

function Intro({ transition }) {
  return (
    <Container>
      <div className="content">
        {transition(({ innerHeight, ...rest }, item) => (
          <animated.div className="item" style={rest}>
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
      <Copyright style={{ position: "absolute", bottom: "2rem" }} />
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .content {
    width: 37.5rem;
  }

  .item {
    overflow: hidden;
    width: 100%;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 6rem;
    font-weight: 800;
    text-transform: uppercase;
    will-change: transform, opacity, height;
    white-space: nowrap;
  }
`;
