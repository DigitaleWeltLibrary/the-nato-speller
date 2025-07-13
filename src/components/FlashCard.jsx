import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import geticon from "../utils/geticon";

export default function FlashCard({ letter, word }) {

    return (
        <div>
            <FontAwesomeIcon
                icon={geticon(letter)}
                size="2x"
            />
            <h2>{word}</h2>
        </div>
    )
}