import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useTransition, useChain, useSpringRef } from "@react-spring/web";
// data
import { data } from "./List/data";
// redux
import useAuthRedux from "stores/auth/useAuthRedux";
// components
import Intro from "./Intro";
import List from "./List";

function Main() {
  const letterHeight = window.innerWidth > 750 ? 70 : 40;

  const { state: authState, setInit } = useAuthRedux();
  const [open, setOpen] = useState(authState.initialized);
  const [items, setItems] = useState<string[]>([]);

  // intro animation
  const introTransApi = useSpringRef();
  const introTransition = useTransition(items, {
    ref: introTransApi,
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateY(0deg)",
      color: "#f8f8f8",
    },
    enter: [
      { opacity: 1, height: letterHeight, innerHeight: letterHeight },
      { transform: "perspective(600px) rotateY(60deg)", color: "#e76f51" },
      { transform: "perspective(600px) rotateY(0deg)" },
    ],
    leave: [{ color: "#dddddd" }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: [{ color: "#e76f51" }],
  });

  useEffect(() => {
    setItems(["Canvas", "Case", "By Huurray."]);
    setTimeout(() => setItems(["Canvas", "Case"]), 1500);
    setTimeout(() => {
      setOpen(true);
      setInit();
    }, 4000);
    // eslint-disable-next-line
  }, []);

  // list animation
  const listTransApi = useSpringRef();
  const listTransition = useTransition(open ? data : [], {
    ref: listTransApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // chaining animation
  useChain(open ? [introTransApi, listTransApi] : [listTransApi, introTransApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <Container>
      {open ? <List transition={listTransition} /> : <Intro transition={introTransition} />}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.indigo};
`;
