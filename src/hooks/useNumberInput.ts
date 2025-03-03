import { useState, useEffect } from "react";

const useNumberInput = (): string => {
  const [number, setNumber] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key >= "0" && event.key <= "9") {
      setNumber((prev) => prev + event.key);
    }
    if (event.key === "Delete" || event.key === "Backspace") {
      setNumber((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return number;
};

export default useNumberInput;
