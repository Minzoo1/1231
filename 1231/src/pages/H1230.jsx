import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a2e;
  overflow: hidden;
  position: relative;
`;

const rainAnimation = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(100vh);
  }
`;

const RainDrop = styled.div`
  position: absolute;
  width: 2px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  animation: ${rainAnimation} 1s linear infinite;
`;

const windAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const WindLine = styled.div`
  position: absolute;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  animation: ${windAnimation} 3s linear infinite;
`;

const flyAnimation = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(100vw, -100vh) rotate(720deg);
    opacity: 0;
  }
`;

const FlyingTextSpan = styled.span`
  position: absolute;
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: ${flyAnimation} 3s linear forwards;
  white-space: nowrap;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

function H1230() {
  const [flyingTexts, setFlyingTexts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlyingTexts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlyingTexts((prev) => prev.slice(1));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [flyingTexts]);

  const raindrops = Array.from({ length: 100 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`,
  }));

  const windLines = Array.from({ length: 20 }, (_, i) => ({
    width: `${Math.random() * 50 + 50}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
  }));

  return (
    <PageContainer>
      {raindrops.map((drop, index) => (
        <RainDrop
          key={`rain-${index}`}
          style={{ left: drop.left, animationDelay: drop.animationDelay }}
        />
      ))}
      {windLines.map((line, index) => (
        <WindLine
          key={`wind-${index}`}
          style={{
            width: line.width,
            top: line.top,
            animationDelay: line.animationDelay,
          }}
        />
      ))}
      {flyingTexts.map((text) => (
        <FlyingTextSpan key={text.id} style={{ left: text.x, top: text.y }}>
          미구현
        </FlyingTextSpan>
      ))}
      <Title>
        밖에는 비바람이 몰아쳐 진행할수없습니다. (미구현) 12/30일 정시오픈예정!
      </Title>
    </PageContainer>
  );
}

export default H1230;
("");
