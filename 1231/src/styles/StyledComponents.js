import styled from "styled-components";

export const HintContainer = styled.div`
  margin-top: 20px;
`;

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

export const KeypadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px auto;
`;

export const Key = styled.button`
  font-size: 1.5rem;
  padding: 10px;
  background: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0; /* 기본 상태 */
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* 요소 간격 */
`;

export const TextMessage = styled.p`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const RestartButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background: linear-gradient(135deg, #f9d423, #ff4e50);
  color: white;
`;

export const MainHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NavigationButton = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  margin: 10px;
  background: white;
  color: #ff4e50;
  border: 2px solid #ff4e50;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff4e50;
    color: white;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;

  /* 배경 그라데이션과 애니메이션 */
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  background-size: 200% 200%;
  animation: backgroundMove 5s ease infinite;

  @keyframes backgroundMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const InputDigit = styled.div`
  font-size: 2rem;
  width: 50px;
  height: 50px;
  margin: 0 5px;
  border: 2px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
`;

export const SubmitButton = styled.button`
  font-size: 1.2rem;
  padding: 12px 24px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

export const EmphasizedText = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: #000000; /* 강조 색상 */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  animation: glow 2s infinite;

  @keyframes glow {
    0% {
      text-shadow: 0 0 10px #ffdd59, 0 0 20px #ffdd59, 0 0 30px #ffc107;
    }
    50% {
      text-shadow: 0 0 20px #ffdd59, 0 0 30px #ffc107, 0 0 40px #ffdd59;
    }
    100% {
      text-shadow: 0 0 10px #ffdd59, 0 0 20px #ffdd59, 0 0 30px #ffc107;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, #1d2a82, #4f219f); /* 배경 그라데이션 */
  text-align: center;
  padding: 20px;
  color: white;
  animation: backgroundShift 6s ease-in-out infinite;

  @keyframes backgroundShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ProblemHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  animation: slideIn 1s ease;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ProblemText = styled.p`
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  animation: fadeIn 1.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FloatingEffect = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffd700; /* 금색 */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
