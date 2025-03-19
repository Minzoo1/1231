import styled, { keyframes } from "styled-components";
import Lottie from "react-lottie-player";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import pixelBackground from "../assets/pixel-background.png";
import Minzo from "../assets/Minzo.png";
import Minzomi from "../assets/Minzomi.png";
import Bou from "../assets/Bou.png";
import Rang from "../assets/Rang.jpg"; // 사진 asset 추가
import heartAnimation from "../animations/heartAnimation.json";
import Fire from "../animations/Fire.json";


// 애니메이션 정의
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const moveRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(150px); }
`;

const giveBouquet = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-20px); opacity: 1; }
`;

// pulse 애니메이션: 살짝 확대되었다 작아지면서 생동감을 부여
const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.9; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.9; }
`;

// 컴포넌트 스타일
const Scene = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  background-color: #f0f0f0;
  border: 2px solid #000;
  overflow: hidden;
  image-rendering: pixelated;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${pixelBackground}) repeat;
  background-size: cover;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in forwards;
  animation-delay: 0s;
`;

const MaleCharacter = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 152px;
  height: 152px;
  background: url(${Minzo}) no-repeat;
  background-size: cover;
  opacity: 0;
  animation: ${moveRight} 4s linear forwards, ${fadeIn} 2s ease-in forwards;
  animation-delay: 2s;
`;

const FemaleCharacter = styled.div`
  position: absolute;
  bottom: 50px;
  left: 400px;
  width: 152px;
  height: 152px;
  background: url(${Minzomi}) no-repeat;
  background-size: cover;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in forwards;
  animation-delay: 6s;
`;

const Bouquet = styled.div`
  position: absolute;
  bottom: 80px;
  left: 280px;
  width: 152px;
  height: 152px;
  background: url(${Bou}) no-repeat;
  background-size: cover;
  opacity: 0;
  animation: ${giveBouquet} 2s ease-in forwards;
  animation-delay: 8s;
`;

const SpeechBubble = styled.div`
  position: absolute;
  bottom: 200px;
  left: 120px;
  width: 180px;
  background: white;
  border: 1px solid black;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in forwards;
  animation-delay: 10s;
`;

// 화려한 마지막 장면: 사진 배경에 pulse, 밝기 및 채도 효과, glow 효과 추가
const SpectacularFinalScene = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 700px;
  height: 500px;
  background: url(${Rang}) no-repeat center center;
  background-size: cover;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in forwards, ${pulse} 3s ease-in-out infinite;
  animation-delay: 15s;
  filter: brightness(1.3) saturate(1.2);
  box-shadow: 0 0 40px 20px rgba(255, 215, 0, 0.8);
  overflow: hidden;
`;

export default function AnimationScene() {
  const { width, height } = useWindowSize();
  return (
    <Scene>
      <Background />
      <MaleCharacter />
      <FemaleCharacter />
      <Bouquet />
      <SpeechBubble>이 꽃을 받아주시요 민쪼미양..</SpeechBubble>
      <SpectacularFinalScene>
        {/* 하트 애니메이션 */}
        <Lottie
          loop
          animationData={heartAnimation}
          play
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />
        {/* 폭죽 애니메이션 */}
        <Lottie
          loop
          animationData={Fire}
          play
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />
        {/* 축하 confetti 효과 */}
        <Confetti
          width={700}
          height={500}
          numberOfPieces={300}
          recycle={false}
          gravity={0.3}
          // 창 크기에 맞춰 confetti 영역을 조정할 수도 있음
          // width={width} height={height}
        />
      </SpectacularFinalScene>
    </Scene>
  );
}
