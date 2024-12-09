import React, { useState } from "react";
import Keypad from "../components/Keypad";
import ResultModal from "../components/ResultModal";
import {
  MainContainer,
  Header,
  InputBox,
  InputDigit,
  SubmitButton,
} from "../styles/StyledComponents";

const MainPage = () => {
  const [input, setInput] = useState(""); // 입력 상태
  const [isCorrect, setIsCorrect] = useState(null); // 정답 여부
  const correctPassword = "4149"; // 정답

  const onInput = (digit) => {
    if (input.length < 4) {
      setInput((prev) => prev + digit);
    }
  };

  const onDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    setIsCorrect(input === correctPassword);
  };

  const resetGame = () => {
    setInput("");
    setIsCorrect(null);
  };

  return (
    <MainContainer>
      <Header>🔐 비밀번호 추측 게임!</Header>
      <p>1, 2, 3, 4, 5번문제를 통해 정답을 추측해보세요.</p>

      {/* 입력 상태 표시 */}
      <InputBox>
        {Array(4)
          .fill("")
          .map((_, i) => (
            <InputDigit key={i}>{input[i] || "_"}</InputDigit>
          ))}
      </InputBox>

      {/* Keypad 컴포넌트 */}
      <Keypad onInput={onInput} onDelete={onDelete} />

      <SubmitButton onClick={handleSubmit} disabled={input.length < 4}>
        입력
      </SubmitButton>

      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          resetGame={resetGame}
          modalRef={React.createRef()}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;
