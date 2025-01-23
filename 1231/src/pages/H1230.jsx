import styled, { keyframes } from "styled-components";

import pixelBackground from "../assets/pixel-background.png";

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

// 컴포넌트 스타일
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${pixelBackground}) repeat;
  background-size: cover;
  opacity: 0; /* 초기 상태에서 숨김 */
  animation: ${fadeIn} 2s ease-in forwards; /* 페이드인 애니메이션 */
  animation-delay: 0s; /* 애니메이션 시작 시간 설정 */
`;

const MaleCharacter = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 152px;
  height: 152px;
  background: url("/src/assets/Minzo.png") no-repeat;
  background-size: cover;
  opacity: 0; /* 초기 상태에서 숨김 */
  animation: ${moveRight} 4s linear forwards, ${fadeIn} 2s ease-in forwards;
  animation-delay: 2s; /* 배경 이후 등장 */
`;

const FemaleCharacter = styled.div`
  position: absolute;
  bottom: 50px;
  left: 400px;
  width: 152px;
  height: 152px;
  background: url("/src/assets/Minzomi.png") no-repeat;
  background-size: cover;
  opacity: 0; /* 초기 상태에서 숨김 */
  animation: ${fadeIn} 2s ease-in forwards;
  animation-delay: 6s; /* 남자 캐릭터 이후 등장 */
`;

const Bouquet = styled.div`
  position: absolute;
  bottom: 80px;
  left: 280px;
  width: 152px;
  height: 152px;
  background: url("/src/assets/Bou.png") no-repeat;
  background-size: cover;
  opacity: 0; /* 초기 상태에서 숨김 */
  animation: ${giveBouquet} 2s ease-in forwards;
  animation-delay: 8s; /* 여자 캐릭터 이후 등장 */
`;

const SpeechBubble = styled.div`
  position: absolute;
  bottom: 200px;
  left: 0;
  width: 120px;
  background: white;
  border: 1px solid black;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  opacity: 0; /* 초기 상태에서 숨김 */
  animation: ${fadeIn} 2s ease-in forwards;
  animation-delay: 10s; /* 꽃다발 이후 등장 */
`;

const Scene = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  background-color: #f0f0f0;
  border: 2px solid #000;
  overflow: hidden;
  image-rendering: pixelated;
`;

export default function AnimationScene() {
  return (
    <Scene>
      <Background />
      <MaleCharacter />
      <FemaleCharacter />
      <Bouquet />
      <SpeechBubble>이 꽃을 받아주시요 민쪼미양..</SpeechBubble>
    </Scene>
  );
}
