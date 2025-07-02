export default function TranslateTextarea({ settextstate }) {

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