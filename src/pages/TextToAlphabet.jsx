import { useState } from "react";
import TranslateTextarea from "../components/TranslateTextarea";

export default function TextToAlphabet() {

    const [gettext, setgettext] = useState([])

    const settextstate = (text) => setgettext(text)


    return (
        <>
            <h1>
                TextToAlphabet
            </h1>

            <article>
                <TranslateTextarea
                    settextstate={settextstate}
                />
                {gettext.map(word => word + " + ")}
            </article>
        </>
    )
}