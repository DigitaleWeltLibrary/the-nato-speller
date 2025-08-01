import { faBookAtlas, faCircleQuestion, faComment, faLanguage, faQuestion, faSignLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import style from "../style/header.module.scss"

export default function Navigation() {
    /* NOTE initialize states */
    const navigate = useNavigate()
    const location = useLocation()

    /* NOTE state to manage the dropdown by url path */
    const [dropdown, setDropdown] = useState(
        () => location.pathname.substring(1) || "flashcards"
    )

    /* NOTE state to manage the icon */
    const [geticon, seticon] = useState("flashcards")

    /* NOTE dropdown items */
    const options = [
        /* NOTE path, name, icon */
        ["flashcards", "Flash Cards", faBookAtlas],
        ["texttoalphabet", "Text To Alphabet", faLanguage],
        ["quiz", "Quiz", faCircleQuestion]
    ]

    /* NOTE change path location */
    const changelocation = (path) => {
        setDropdown(path)
        navigate(`/${path}`)
    }

    /* NOTE set icon by dropdown change */
    useEffect(() => seticon(options.find(opt => opt[0] === dropdown)?.[2]),
        [dropdown])

    return (
        <nav
            className={style.nav}
        >

            {geticon &&
                <FontAwesomeIcon
                    icon={geticon}
                    size="xl"
                />
            }
            <select
                onChange={(e) => changelocation(e.target.value)}
            >
                {options.map((option) => {

                    const [path, name, icon] = option;

                    return (

                        <option
                            key={path}
                            value={path}
                            selected={dropdown === path}
                        >
                            {name}
                        </option>
                    );
                })}

            </select>
        </nav >
    )
}