import React, { useEffect, useState } from "react";
import "@styles/Personajes.scss";
import axios from "axios";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import CharacterList from "@containers/CharacterList";

const Personajes = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [page, setPage] = useState(
        "https://rickandmortyapi.com/api/character?page=1"
    );

    const getCharacters = async () => {
        await axios.get(page).then((res) => {
            console.log(res.data);
            setCharacters(res.data.results);
            setInfo(res.data.info);
        });
    }

    useEffect(() => {
        getCharacters()
    }, [page]);

    const handlePageChange = (url) => {
        setPage(url);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="characters">
            <CharacterList characters={characters} />
            <div className="character-controls">
                {info.prev ? (
                    <FaArrowCircleLeft
                        className="personajes_navigation"
                        onClick={() => handlePageChange(info.prev)}
                    />
                ) : (
                    <div></div>
                )}
                <p>
                    {page.charAt(page.length - 1)} / {info.pages}
                </p>
                {info.next ? (
                    <FaArrowCircleRight
                        className="personajes_navigation"
                        onClick={() => handlePageChange(info.next)}
                    />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default Personajes;
