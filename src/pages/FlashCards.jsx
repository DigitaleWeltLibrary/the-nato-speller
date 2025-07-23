import alphabet from "../assets/alphabet.json";
import FlashCard from "../components/FlashCard";
import style from "../style/flashcards.module.scss";
import changeTitle from "../utils/changetitle";

export default function FlashCards() {
  /* NOTE change page title */
  changeTitle("FlashCards");

  return (
    <>
      <h1>FlashCards</h1>

      <article className={style.flashcards}>
        {alphabet.alphabet.map(({ letter, word }, index) => {
          return <FlashCard key={index} letter={letter} word={word} />;
        })}
      </article>
    </>
  );
}
