import alphabet from "../assets/alphabet.json"



export function getword(letter) {

    letter = letter.toUpperCase()

    const entryForLetter = alphabet.alphabet.find(entry => entry.letter === letter);
    return entryForLetter ? entryForLetter.word : "??";
}

