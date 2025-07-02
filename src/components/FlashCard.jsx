import { faA, faB, faC, faD, faE, faF, faG, faH, faI, faJ, faK, faL, faM, faN, faO, faP, faQ, faR, faS, faT, faU, faV, faW, faX, faY, faZ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FlashCard({ letter, word }) {

    const iconMap = {
        'A': faA, 'B': faB, 'C': faC, 'D': faD, 'E': faE, 'F': faF, 'G': faG,
        'H': faH, 'I': faI, 'J': faJ, 'K': faK, 'L': faL, 'M': faM, 'N': faN,
        'O': faO, 'P': faP, 'Q': faQ, 'R': faR, 'S': faS, 'T': faT, 'U': faU,
        'V': faV, 'W': faW, 'X': faX, 'Y': faY, 'Z': faZ
    };



    const currentIcon = iconMap[letter.toUpperCase()];


    return (
        <div>
            <FontAwesomeIcon
                icon={currentIcon}
                size="2x"
            />
            <h2>{word}</h2>
        </div>
    )
}