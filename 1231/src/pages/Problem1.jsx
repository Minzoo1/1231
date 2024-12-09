import {
  ProblemContainer,
  ProblemHeader,
  ProblemText,
  EmphasizedText,
} from "../styles/StyledComponents";

const Problem1 = () => {
  return (
    <ProblemContainer>
      <ProblemHeader>✨ 1번 문제</ProblemHeader>
      <ProblemText>
        내가 제일 행복한 날짜는?
        <br />
        <EmphasizedText>
          <strong>힌트 : 우리둘이 커비를 발견한날</strong>
        </EmphasizedText>
      </ProblemText>
    </ProblemContainer>
  );
};

export default Problem1;
