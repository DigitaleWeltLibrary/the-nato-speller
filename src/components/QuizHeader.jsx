import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuizHeader({ getquiztext, setstart }) {
    return (
        <header>
            <p>Text for the quiz:</p>
            <p>{getquiztext}</p>
            <button
                onClick={() => setstart(true)}
            >
                <FontAwesomeIcon
                    icon={faXmark}

                />
            </button>
        </header>
    )
}