import {
  ProblemContainer,
  ProblemHeader,
  ProblemText,
  FloatingEffect,
} from "../styles/StyledComponents";

const Problem2 = () => {
  return (
    <ProblemContainer>
      <ProblemHeader>🌟 2번 문제</ProblemHeader>
      <ProblemText>
        내가 좋아하는 윤카이민 최애 사진은? <br />
        <FloatingEffect>
          <strong>힌트: 는 없습니다XX</strong>
        </FloatingEffect>
      </ProblemText>
    </ProblemContainer>
  );
};

export default Problem2;
