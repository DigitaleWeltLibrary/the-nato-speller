import { useEffect, useState } from "react"
import { getword } from "../utils/getword.js"


export default function Translation({ words }) {

    const [getWords, setWords] = useState([])

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



    return <p>
        {getWords.map((word, index) => <span key={index}>{word}</span>)}
    </p>

}