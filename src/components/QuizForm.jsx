import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import QuizHeader from "./QuizHeader";
import { getword } from "../utils/getword"
import geticon from "../utils/geticon";

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

    return (
        <section>
            <QuizHeader
                getquiztext={getquiztext}
                setstart={setstart}
                style={style}
                setquiztext={setquiztext}
            />

            <article className={style.quizsection}>


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
                                                <div>
                                                    <FontAwesomeIcon
                                                        icon={geticon(letter)}
                                                        size="2x"
                                                        key={`icon${wordindex}`}
                                                    />
                                                    <p key={wordindex}>{getword(letter)}</p>

                                                </div>
                                                :
                                                <div>
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
                                                        placeholder="type here..."
                                                    />

                                                </div>
                                        )

                                    }
                                    )
                                }

                                {wordindex < words.length - 1 && <p className={style.space}>(SPACE)</p>}

                            </>

                        )
                    })
                }

            </article >
        </section>
    )
}