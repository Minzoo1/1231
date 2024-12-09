import {
  ProblemContainer,
  ProblemHeader,
  ProblemText,
  EmphasizedText,
} from "../styles/StyledComponents";

const Problem3 = () => {
  return (
    <ProblemContainer>
      <ProblemHeader>✨ 3번 문제</ProblemHeader>
      <ProblemText>
        류충현은 평소에 죽을때가되면 이곳에서 죽고싶다고했다!
        <br />
        그럼 이곳의 관측 가능한 크기는?
        <EmphasizedText></EmphasizedText>
      </ProblemText>
    </ProblemContainer>
  );
};

export default Problem3;
