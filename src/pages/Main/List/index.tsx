import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { animated } from "@react-spring/web";
// components
import Header from "./Header";
import Copyright from "../Copyright";
// styles
import { shake } from "styles/anim";

function List({ transition }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <ListBox>
        {transition((style, item) => (
          <animated.div className="item" style={{ ...style }} onClick={() => navigate(item.url)}>
            <div className="name">{item.name}</div>
            <img src={item.backgroundImage} alt="이미지" />
          </animated.div>
        ))}
      </ListBox>
      <Copyright style={{ marginBottom: "4rem" }} />
    </Container>
  );
}

export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;
  padding: 0 4rem 4rem 4rem;
  margin-bottom: auto;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .item {
    width: 100%;
    height: 30vh;
    border-radius: 2.2rem;
    will-change: transform, opacity;
    cursor: pointer;
    transition: 0.15s transform;
    overflow: hidden;

    .name {
      margin: 2rem 2.5rem;
      font-size: 2rem;
      text-align: right;
      color: ${({ theme }) => theme.colors.grey500};
    }

    &:hover {
      animation: ${shake} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      transform: translate3d(0, 0, 0);
      perspective: 1000px;
    }
  }
`;