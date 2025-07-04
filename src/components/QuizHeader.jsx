import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuizHeader({ getquiztext, setstart, style, setquiztext }) {
    return (
        <header className={style.quizinfo}>
            <h2>Text for the quiz:</h2>
            <p>{getquiztext}</p>
            <button
                onClick={() => {
                    setstart(true)
                    setquiztext("")
                }}
            >
                <FontAwesomeIcon
                    icon={faXmark}
                    color="#2563EB"
                />
            </button>
        </header>
    )
}