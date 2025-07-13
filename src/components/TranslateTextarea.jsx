import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function TranslateTextarea({ settextstate }) {

    const [text, setText] = useState("")

    /* NOTE converts the input into a trimmed string array */
    const manageinput = (e) => {
        const value = e.target.value
        setText(value)

        if (value.length === 0) {
            settextstate([])
        } else {
            const textArray = value.split(/\s+/).map(word => word.trim())
            settextstate(textArray)
        }
    }

    /* NOTE removes the text */
    const removeText = () => {
        setText("")
        settextstate([])
    }


    return (
        <section>
            <textarea
                placeholder="Type text for translating ...."
                onChange={(e) => manageinput(e)}
                value={text}
            />
            {
                text.length > 0 &&
                <button
                    onClick={removeText}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            }
        </section>
    )
}