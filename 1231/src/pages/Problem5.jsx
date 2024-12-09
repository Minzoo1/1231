import {
  ProblemContainer,
  ProblemHeader,
  ProblemText,
  EmphasizedText,
} from "../styles/StyledComponents";

const Problem5 = () => {
  return (
    <ProblemContainer>
      <ProblemHeader>✨ 5번 문제</ProblemHeader>
      <ProblemText>
        내가 국내여행중 다시가고싶은 지역이있다.
        <br />그 지역에있는 국보중 이곳의 유네스코 세계유산 지정번호는?
        <EmphasizedText>
          <strong>힌트: 3번문제와 관련이 있습니다.</strong>
        </EmphasizedText>
      </ProblemText>
    </ProblemContainer>
  );
};

export default Problem5;
