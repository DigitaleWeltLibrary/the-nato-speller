import { faA, faB, faC, faD, faE, faF, faG, faH, faI, faJ, faK, faL, faM, faN, faO, faP, faQ, faR, faS, faT, faU, faV, faW, faX, faY, faZ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useState } from "react";
import QuizHeader from "./QuizHeader";
import { getword } from "../utils/getword"

export default function QuizForm({ getquiztext, setstart, style, setquiztext }) {

    /* NOTE text to word array*/
    const words = getquiztext.split(" ")

    /* NOTE initialize state with string array */
    const [getuserinput, setuserinput] = useState(
        () => new Array(words.length).fill("")
    )

    /* NOTE get user input */
    const getuserinputbyindex = (index) => {
        return getuserinput[index];
    }

    /* NOTE set user input */
    const setuserinputbyindex = (index, value) => {
        const inputs = [...getuserinput]
        inputs[index] = value
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
                setquiztext={setquiztext}
            />

            <article>


                {
                    words.map((word, wordindex) => {

                        const letters = word.split("")

                        return (
                            <>
                                {
                                    letters.map((letter, letterindex) => {

                                        const jsonword = getword(letter)
                                        let userinput = getuserinputbyindex(letterindex)
                                        let rightword

                                        if (userinput) {
                                            userinput = userinput[0]?.toUpperCase() + userinput?.slice(1)
                                            rightword = userinput == jsonword
                                        } else rightword = false


                                        return (

                                            rightword ?
                                                <>
                                                    <FontAwesomeIcon
                                                        icon={geticon(letter)}
                                                        size="2x"
                                                        key={`icon${wordindex}`}
                                                    />
                                                    <p key={wordindex}>{getword(letter)}</p>

                                                </>
                                                :
                                                <>
                                                    <FontAwesomeIcon
                                                        icon={geticon(letter)}
                                                        size="2x"
                                                        key={`icon${letterindex}`}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={getuserinput[letterindex]}
                                                        onChange={(e) => setuserinputbyindex(letterindex, e.target.value)}
                                                        key={letterindex}
                                                    />

                                                </>
                                        )

                                    }
                                    )
                                }

                                {wordindex < words.length - 1 && <p>(SPACE)</p>}

                            </>

                        )
                    })
                }

            </article >
        </section>
    )
}