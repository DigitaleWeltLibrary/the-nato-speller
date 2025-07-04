import { faA, faB, faC, faD, faE, faF, faG, faH, faI, faJ, faK, faL, faM, faN, faO, faP, faQ, faR, faS, faT, faU, faV, faW, faX, faY, faZ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import QuizHeader from "./QuizHeader";

export default function QuizForm({ getquiztext, setstart, style }) {

    /* NOTE text to word array*/
    const words = getquiztext.split(" ")

    /* NOTE initialize state with string array */
    const [getuserinput, setuserinput] = useState(
        () => new Array(words.length).fill("")
    )

    /* NOTE set user input to state */
    const changeuserinput = (e, i) => {
        const newValue = e.target.value

        const inputs = [...getuserinput]
        inputs[i] = newValue
        setuserinput(inputs)
    }

    /* NOTE icons */
    const iconMap = {
        'A': faA, 'B': faB, 'C': faC, 'D': faD, 'E': faE, 'F': faF, 'G': faG,
        'H': faH, 'I': faI, 'J': faJ, 'K': faK, 'L': faL, 'M': faM, 'N': faN,
        'O': faO, 'P': faP, 'Q': faQ, 'R': faR, 'S': faS, 'T': faT, 'U': faU,
        'V': faV, 'W': faW, 'X': faX, 'Y': faY, 'Z': faZ
    };

    /* NOTE map letters to icons */
    const geticon = (letter) => iconMap[letter.toUpperCase()];


    return (
        <section>
            <QuizHeader
                getquiztext={getquiztext}
                setstart={setstart}
                style={style}
            />

            <article>
                {
                    words.map((word, i) => {

                        const userInputForComparison = getuserinput[i]?.toLowerCase().trim()
                        const wordForComparison = word.toLowerCase()

                        return (
                            userInputForComparison == wordForComparison
                                ?
                                <>
                                    <FontAwesomeIcon
                                        icon={geticon(word[0])}
                                        size="2x"
                                        key={`icon${i}`}
                                    />
                                    <p key={i}>{word}</p>
                                </>
                                :
                                <>
                                    <FontAwesomeIcon
                                        icon={geticon(word[0])}
                                        size="2x"
                                        key={`icon${i}`}
                                    />
                                    <input
                                        key={i}
                                        type="text"
                                        onChange={(e) => changeuserinput(e, i)}
                                    />
                                </>

                        )
                    })
                }
            </article>
        </section>
    )
}