import { useState } from "react"
import TextForQuiz from "../components/TextForQuiz"

export default function Quiz() {

    const [getquiztext, setquiztext] = useState("")
    const [getstart, setstart] = useState(true)


    return (
        <>
            <h1>
                Quiz
            </h1>

            <article>

                {
                    getstart ?
                        <TextForQuiz
                            setquiztext={setquiztext}
                            setstart={setstart}
                            getquiztext={getquiztext}
                        />
                        :
                        <p>{getquiztext}</p>
                }

            </article>
        </>
    )
}