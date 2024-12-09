import { useEffect } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import fireworkAnimation from "../animations/fireworkAnimation.json";
import heartAnimation from "../animations/heartAnimation.json";

import {
  ModalContainer,
  ModalContent,
  RestartButton,
  TextMessage,
  EmphasizedText,
} from "../styles/StyledComponents";

const ResultModal = ({ isCorrect, resetGame, modalRef }) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.out" },
    });

    // 기본 애니메이션 (모달 나타나기)
    timeline.fromTo(
      modalRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1 }
    );
  }, [isCorrect]);

  return (
    <ModalContainer ref={modalRef}>
      <ModalContent>
        {/* Lottie 애니메이션 */}
        {isCorrect ? (
          <Lottie
            animationData={heartAnimation}
            loop={true}
            style={{ width: 300, height: 300 }}
          />
        ) : (
          <Lottie
            animationData={fireworkAnimation}
            loop={true}
            style={{ width: 300, height: 300 }}
          />
        )}

        {/* 정답/오답 텍스트 */}
        <TextMessage>
          {isCorrect
            ? "🎉 축하합니다! 정답입니다!"
            : "❌ 아쉽지만 틀렸습니다. 다시 도전해보세요!"}
        </TextMessage>

        {/* 정답일 경우 강조 텍스트 출력 */}
        {isCorrect ? (
          <EmphasizedText>🎁 QM3의 트렁크쪽을 살펴보십시오!</EmphasizedText>
        ) : (
          <RestartButton onClick={resetGame}>다시 시작하기</RestartButton>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default ResultModal;
