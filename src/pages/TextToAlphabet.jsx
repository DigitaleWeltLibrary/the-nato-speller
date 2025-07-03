import { useState } from "react";
import TranslateTextarea from "../components/TranslateTextarea";
import Translation from "../components/Translation";
import style from "../style/texttoalphabet.module.scss"

export default function TextToAlphabet() {
    /* NOTE state to manage string array for translation */
    const [gettext, setgettext] = useState([])

    /* NOTE function to set string array to state */
    const settextstate = (text) => setgettext(text)


    return (
        <>
            <h1>
                TextToAlphabet
            </h1>

            <article className={style.texttoalphabet}>
                <TranslateTextarea
                    settextstate={settextstate}
                />

                {gettext.length > 0 && <Translation
                    words={gettext}
                />}
            </article>
        </>
    )
}