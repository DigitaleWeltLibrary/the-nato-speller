import { useEffect, useState } from "react";
import { getword } from "../utils/getword.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Translation({ words, style }) {
  /* NOTE string state for translation */
  const [getWords, setWords] = useState([]);
  const [copied, setCopied] = useState(false);

  /* NOTE translates the letters into nato alphabet */
  useEffect(() => {
    const alphabetwords = [];

    words.forEach((word) => {
      const letters = word.split("");
      letters.forEach((letter, index) => {
        if (index == 0 && alphabetwords.length > 0)
          alphabetwords.push("(space)");
        alphabetwords.push(getword(letter));
      });
    });

    setWords(alphabetwords);
  }, [words]);

  /* NOTE change icon for a 2sec and copy */
  const handleCopy = () => {
    navigator.clipboard.writeText(getWords.join(" "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      <p className={style.text}>NATO Alphabet Translation:</p>
      <div>
        {getWords.map((word, index) => (
          <p key={index}>
            <span>{word[0]}</span>
            {word.slice(1)}
          </p>
        ))}
      </div>
      <button className={style.copy} onClick={handleCopy}>
        {copied ? (
          <>
            <FontAwesomeIcon icon={faClipboardCheck} size="xl" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faCopy} size="xl" />
            <span>Copy</span>
          </>
        )}
      </button>
    </section>
  );
}
