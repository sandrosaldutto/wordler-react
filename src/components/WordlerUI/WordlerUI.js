import React from "react";
import useWordler from "../../hooks/useWordler";
import { useEffect } from "react";

export default function WordlerUI({ answer }) {
  const { currentGuess, handleKeyup } = useWordler(answer);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return <div>current guess - {currentGuess}</div>;
}
