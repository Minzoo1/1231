import {
  ProblemContainer,
  ProblemHeader,
  ProblemText,
  EmphasizedText,
} from "../styles/StyledComponents";

const Problem4 = () => {
  return (
    <ProblemContainer>
      <ProblemHeader>✨ 4번 문제</ProblemHeader>
      <ProblemText>
        랑이 생일과 세계 고양이의날을 합친 숫자는?
        <EmphasizedText>
          <strong>
            힌트: 랑이생일은 큼지막한일자로 임의지정한것이며 알기쉬운
            날짜입니다.(탄생석:루비)
          </strong>
        </EmphasizedText>
      </ProblemText>
    </ProblemContainer>
  );
};

export default Problem4;
