import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import QuizHeader from "./QuizHeader";
import { getword } from "../utils/getword";
import geticon from "../utils/geticon";

export default function QuizForm({
  getquiztext,
  setstart,
  style,
  setquiztext,
}) {
  /* NOTE letters of the text */
  const letters = getquiztext.split("");

  /* NOTE nato words array */
  const natoWords = letters.map((letter) => {
    return letter == " " ? "(space)" : getword(letter);
  });

  /* NOTE user input state */
  const [userInput, setUserInput] = useState(() =>
    Array(letters.length).fill("")
  );

  /* NOTE set new user input */
  const setnewinput = (index, value) => {
    const newInput = [...userInput];
    let newvalue = value?.trim();
    newvalue = newvalue[0].toUpperCase() + newvalue.slice(1).toLowerCase();

    if (newvalue != "") {
      newInput[index] = newvalue;
      setUserInput(newInput);
    }
  };

  return (
    <section>
      <QuizHeader
        getquiztext={getquiztext}
        setstart={setstart}
        style={style}
        setquiztext={setquiztext}
      />

      <article className={style.quizsection}>
        {letters.map((letter, index) => {
          return (
            <>
              {natoWords[index] == "(space)" ? (
                <p key={`space-${index}`} className={style.space}>
                  (Space)
                </p>
              ) : (
                <div key={`div-${index}`}>
                  <FontAwesomeIcon
                    icon={geticon(letter)}
                    size="2x"
                    key={`icon-${index}`}
                  />
                  {natoWords[index] == userInput[index] ? (
                    <p key={`text-${index}`}>{natoWords[index]}</p>
                  ) : (
                    <input
                      type="text"
                      key={`input-${index}`}
                      placeholder="type here..."
                      onChange={(e) => setnewinput(index, e.target.value)}
                    />
                  )}
                </div>
              )}
            </>
          );
        })}
      </article>
    </section>
  );
}
