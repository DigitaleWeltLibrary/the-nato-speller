export default function TextForQuiz({ setquiztext, setstart, getquiztext, style }) {
    return (
        <header className={style.quizheader}>
            <input
                onChange={(e) => setquiztext(e.target.value.trim())}
                type="text"
                placeholder="Type text for translation ..."
            />
            <button
                onClick={() => setstart(false)}
                disabled={getquiztext.length == 0}
            >start</button>
        </header>
    )
}