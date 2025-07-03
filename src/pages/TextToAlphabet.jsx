import { useState } from "react";
import TranslateTextarea from "../components/TranslateTextarea";
import Translation from "../components/Translation";
import style from "../style/texttoalphabet.module.scss"

export default function TextToAlphabet() {

    const [gettext, setgettext] = useState([])

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

                <Translation
                    words={gettext}
                />
            </article>
        </>
    )
}