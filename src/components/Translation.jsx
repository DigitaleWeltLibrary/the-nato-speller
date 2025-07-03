import { useEffect, useState } from "react"
import { getword } from "../utils/getword.js"


export default function Translation({ words }) {
    /* NOTE string state for translation */
    const [getWords, setWords] = useState([])

    /* NOTE translates the letters into nato alphabet */
    useEffect(() => {
        const alphabetwords = []

        words.forEach(word => {
            const letters = word.split("")
            letters.forEach((letter, index) => {
                if (index == 0 && alphabetwords.length > 0) alphabetwords.push("(space)")
                alphabetwords.push(getword(letter))
            })
        })

        setWords(alphabetwords);
    }, [words]);



    return <div>
        {getWords.map((word, index) => <p key={index}><span>{word[0]}</span>{word.slice(1)}</p>)}
    </div>

}