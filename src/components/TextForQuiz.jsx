export default function TextForQuiz({ setquiztext, setstart, getquiztext }) {
    return (
        <section>
            <input
                onChange={(e) => setquiztext(e.target.value.trim())}
                type="text"
            />
            <button
                onClick={() => setstart(false)}
                disabled={getquiztext.length == 0}
            >start</button>
        </section>
    )
}