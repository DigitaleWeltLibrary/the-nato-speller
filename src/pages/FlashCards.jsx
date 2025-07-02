import alphabet from "../assets/alphabet.json"
import FlashCard from "../components/FlashCard"
import style from "../style/flashcards.module.scss"

export default function FlashCards() {
    return (
        <>
            <h1>
                FlashCards
            </h1>

            <article className={style.flashcards}>

                {
                    alphabet.alphabet.map(({ letter, word }, index) => {
                        return <FlashCard key={index} letter={letter} word={word} />
                    })
                }

            </article>
        </>
    )
}