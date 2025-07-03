export default function TranslateTextarea({ settextstate }) {

    /* NOTE converts the input into a trimmed string array */
    const manageinput = (e) => {
        const value = e.target.value.trim()

        if (value.length === 0) {
            settextstate([]);
            return;
        } else {
            const text = value.split(/\s+/).map(word => word.trim())
            settextstate(text)
        }
    }



    return (
        <textarea
            placeholder="Type text for translating ...."
            onChange={(e) => manageinput(e)}
        />
    )
}