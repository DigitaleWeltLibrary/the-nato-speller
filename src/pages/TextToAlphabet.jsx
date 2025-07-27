import { useState } from "react";
import TranslateTextarea from "../components/TranslateTextarea";
import Translation from "../components/Translation";
import style from "../style/texttoalphabet.module.scss";
import changeTitle from "../utils/changetitle";
import PageHeader from "../components/PageHeader";

export default function TextToAlphabet() {
  /* NOTE state to manage string array for translation */
  const [gettext, setgettext] = useState([]);

  /* NOTE function to set string array to state */
  const settextstate = (text) => setgettext(text);

  /* NOTE change page title */
  changeTitle("Text To Alphabet");

  return (
    <>
      <PageHeader
        title="Text To Alphabet"
        text="Convert any text to NATO phonetic alphabet"
      />

      <article className={style.texttoalphabet}>
        <TranslateTextarea settextstate={settextstate} />

        {gettext.length > 0 && <Translation words={gettext} />}
      </article>
    </>
  );
}
