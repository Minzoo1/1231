import { gsap } from "gsap";
import { KeypadContainer, Key } from "../styles/StyledComponents";

const Keypad = ({ onInput, onDelete }) => {
  const handleClick = (digit, ref) => {
    // 버튼 클릭 애니메이션
    gsap.fromTo(
      ref,
      { scale: 0.8 },
      { scale: 1, duration: 0.2, ease: "elastic.out(1, 0.5)" }
    );
    if (digit === "⌫") {
      onDelete(); // 삭제 동작
    } else {
      onInput(digit); // 입력 동작
    }
  };

  return (
    <KeypadContainer>
      {Array(10)
        .fill("")
        .map((_, i) => (
          <Key
            key={i}
            onClick={(e) => handleClick(i.toString(), e.currentTarget)} // 정확한 DOM 요소 참조
          >
            {i}
          </Key>
        ))}
      <Key onClick={(e) => handleClick("⌫", e.currentTarget)}>⌫</Key>
    </KeypadContainer>
  );
};

export default Keypad;
