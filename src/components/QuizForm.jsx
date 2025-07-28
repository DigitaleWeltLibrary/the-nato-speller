import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import QuizHeader from "./QuizHeader";
import { getword } from "../utils/getword";
import geticon from "../utils/geticon";

export default function QuizForm({
  getquiztext,
  setstart,
  style,
  setquiztext,
}) {
  /* NOTE handle correct answers */
  const [correctAnswers, setCorrectAnswers] = useState(0);
  /* NOTE handle percentec of correct answers */
  const [correctpercent, setCorrectPercent] = useState(0);

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

  /* NOTE count correct answers */
  useEffect(() => {
    let count = 0;
    letters.forEach((_letter, index) => {
      if (natoWords[index] === "(space)") count++;
      else if (
        natoWords[index] === userInput[index] &&
        userInput[index] !== ""
      ) {
        count++;
      }
    });
    setCorrectAnswers(count);
    setCorrectPercent(((count / natoWords.length) * 100).toFixed(2));
  }, [userInput, natoWords, letters]);

  return (
    <section>
      <QuizHeader
        getquiztext={getquiztext}
        setstart={setstart}
        style={style}
        setquiztext={setquiztext}
      />

      <section
        className={style.quizresult}
        style={{ "--percent": `${correctpercent}%` }}
      >
        <p>
          You got {correctAnswers} out of {natoWords.length} words right, that's
          {" " + correctpercent}%.
        </p>
      </section>

      <article className={style.quizsection}>
        {letters.map((letter, index) => {
          const isCorrect = natoWords[index] === userInput[index];

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
                  {isCorrect ? (
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
