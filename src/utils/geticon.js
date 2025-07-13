import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faA, faB, faC, faCircle, faD, faE, faF, faG, faH, faI, faJ, faK, faL, faM, faN, faO, faP, faQ, faQuestion, faR, faS, faT, faU, faV, faW, faX, faY, faZ } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";


/* NOTE icons */
const iconMap = {
    'A': faA, 'B': faB, 'C': faC, 'D': faD, 'E': faE, 'F': faF, 'G': faG,
    'H': faH, 'I': faI, 'J': faJ, 'K': faK, 'L': faL, 'M': faM, 'N': faN,
    'O': faO, 'P': faP, 'Q': faQ, 'R': faR, 'S': faS, 'T': faT, 'U': faU,
    'V': faV, 'W': faW, 'X': faX, 'Y': faY, 'Z': faZ, ".": faCircle, "!": faExclamation,
    "?": faQuestion, 1: fa1, 2: fa2, 3: fa3, 4: fa4, 5: fa5, 6: fa6,
    7: fa7, 8: fa8, 9: fa9, 0: fa0
};

/* NOTE map letters to icons */
const geticon = (letter) => iconMap[letter.toUpperCase()];

export default geticon