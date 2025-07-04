import { useState } from "react"
import TextForQuiz from "../components/TextForQuiz"
import QuizForm from "../components/QuizForm"
import style from "../style/quiz.module.scss"

export default function Quiz() {
    /* NOTE state for quiz text */
    const [getquiztext, setquiztext] = useState("")

    /* NOTE statefor starting the quiz */
    const [getstart, setstart] = useState(true)


    return (
        <>
            <h1>
                Quiz
            </h1>

            <article >

                {
                    getstart ?
                        <TextForQuiz
                            setquiztext={setquiztext}
                            setstart={setstart}
                            getquiztext={getquiztext}
                            style={style}
                        />
                        :
                        <QuizForm
                            style={style}
                            getquiztext={getquiztext}
                            setstart={setstart}
                            setquiztext={setquiztext}
                        />
                }

            </article>
        </>
    )
}