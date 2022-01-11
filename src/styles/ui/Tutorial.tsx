import { useEffect, useState } from "react";
import styled from "@emotion/styled";
// lib
import { getMedia } from "lib/media";
// styles
import { fadeOut } from "styles/anim";

interface Props {
  desktopText?: string;
  mobileText?: string;
}
const Tutorial = ({ desktopText = "Move your mouse.", mobileText = "Touch anywhere." }: Props) => {
  const media = getMedia();
  const [show, setShow] = useState(true);

  function close() {
    setShow(false);
  }

  useEffect(() => {
    setTimeout(() => {
      close();
    }, 2500);
  }, []);

  if (!show) return null;
  return (
    <Container onClick={close}>
      {media === "desktop" ? <Desktop>{desktopText}</Desktop> : <Mobile>{mobileText}</Mobile>}
    </Container>
  );
};

export default Tutorial;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.46);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 2.7s;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
  }
`;
const Desktop = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
const Mobile = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
