import {
  faRefresh,
  faRotateLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function TranslateTextarea({ settextstate, style }) {
  const [text, setText] = useState("");

  /* NOTE converts the input into a trimmed string array */
  const manageinput = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.length === 0) {
      settextstate([]);
    } else {
      const textArray = value.split(/\s+/).map((word) => word.trim());
      settextstate(textArray);
    }
  };

  /* NOTE removes the text */
  const removeText = () => {
    setText("");
    settextstate([]);
  };

  return (
    <section>
      <p className={style.text}>Enter text to translate:</p>
      <input
        type="text"
        placeholder="Type text for translating ...."
        onChange={(e) => manageinput(e)}
        value={text}
      />

      <button onClick={removeText} disabled={text.length === 0}>
        <FontAwesomeIcon icon={faRotateLeft} size="xl" />
      </button>
    </section>
  );
}
