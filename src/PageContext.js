import { useContext, useState, createContext } from "react";

const StepContext = createContext();
const UserContext = createContext();

export function StepHandler() {
  return useContext(StepContext);
}
export function User() {
  return useContext(UserContext);
}

const PageContext = ({ children }) => {
  const [step, setStep] = useState(1);

  const [user, setUser] = useState({
    userName: null,
    email: null,
    number: null,
  });

  const nextStepHandler = () => {
    setStep((prev) => (prev < 4 ? ++prev : prev));
  };
  const prevStepHandler = () => {
    setStep((prev) => (prev > 1 ? --prev : prev));
  };
  const navigateToStep = (step) => {
    setStep((prev) => step);
  };

  return (
    <StepContext.Provider
      value={{ step, nextStepHandler, prevStepHandler, navigateToStep }}
    >
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </StepContext.Provider>
  );
};

export default PageContext;
