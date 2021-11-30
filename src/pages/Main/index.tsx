import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useTransition, useChain, animated, useSpringRef } from "@react-spring/web";
// redux
import useAuthRedux from "stores/auth/useAuthRedux";
// components
import Header from "./Header";
import { data } from "./data";

function Main() {
  const letterHeight = window.innerWidth > 750 ? 70 : 40;

  const navigate = useNavigate();
  const { state: authState, setInit } = useAuthRedux();

  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const [open, setOpen] = useState(authState.initialized);

  const transApi = useSpringRef();
  const transitions = useTransition(items, {
    ref: transApi,
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateY(0deg)",
      color: "#333333",
    },
    enter: [
      { opacity: 1, height: letterHeight, innerHeight: letterHeight },
      { transform: "perspective(600px) rotateY(60deg)", color: "#f26522" },
      { transform: "perspective(600px) rotateY(0deg)" },
    ],
    leave: [{ color: "#8e8e8e" }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: [{ color: "#f26522" }],
  });

  const transNextApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transNextApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [transApi, transNextApi] : [transNextApi, transApi], [0, open ? 0.1 : 0.6]);

  useEffect(() => {
    ref.current.push(setTimeout(() => setItems(["Canvas", "Case", "By Huurray."]), 0));
    ref.current.push(setTimeout(() => setItems(["Canvas", "Case"]), 1500));
    setTimeout(() => {
      setOpen(true);
      setInit();
    }, 4000);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      {open ? (
        <>
          <Header />
          <ListBox>
            {transition((style, item) => (
              <animated.div
                className="item"
                style={{ ...style, height: window.innerHeight * 0.2 }}
                onClick={() => navigate(item.url)}
              >
                <div className="name">{item.name}</div>
                <img src={item.backgroundImage} alt="이미지" />
              </animated.div>
            ))}
          </ListBox>
        </>
      ) : (
        <LetterBox>
          <div className="content">
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div className="item" style={rest}>
                <animated.div style={{ overflow: "hidden", height: innerHeight }}>
                  {item}
                </animated.div>
              </animated.div>
            ))}
          </div>
        </LetterBox>
      )}
      <CopyWright>© Copyright 2022 Huurray, All rights reserved.</CopyWright>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const LetterBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;
  padding: 0 4rem 4rem 4rem;
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
    height: 100%;
    border-radius: 1rem;
    will-change: transform, opacity;
    cursor: pointer;
    transition: 0.15s transform;
    overflow: hidden;

    &:hover {
      transform: scale(1.03) !important;
    }
    .name {
      margin: 1.5rem 2rem;
      font-size: 2.2rem;
      text-align: right;
      color: ${({ theme }) => theme.colors.grey600};
    }
  }
`;
const CopyWright = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey500};
  text-align: center;
`;
