import React, { useEffect, useState } from 'react'
import '@styles/CharacterCard.scss'
import { FaFemale, FaMale, FaGenderless, FaQuestionCircle, FaHeart, FaSkullCrossbones } from "react-icons/fa";
import axios from 'axios';

const CharacterCard = ({ char }) => {
    const [debut, setDebut] = useState('')

    const charStatus = (status) => {
        switch (status) {
            case 'Alive':
                return <FaHeart color='#e01d1d' />
                break;
            case 'Dead':
                return <FaSkullCrossbones color='#6b6567' />
                break;
            default:
                return <FaQuestionCircle />
                break;
        }
    }

    const charGender = (gender) => {
        switch (gender) {
            case 'Male':
                return <FaMale color='#3269a8' />
                break;
            case 'Female':
                return <FaFemale color='#d9487f' />
                break;
            case 'Genderless':
                return <FaGenderless color='#6b6567' />
                break;
            default:
                return <FaQuestionCircle />
                break;
        }
    }

    const getEpisodeData = async () => {
        await axios.get(char.episode[0]).then(res => setDebut(res.data.episode + ' - ' + res.data.name))
    }

    useEffect(() => {
        getEpisodeData()
    }, [])

    return (
        <div className="character-card">
            <img className="character-image" src={char.image} alt="character image" />
            <div className="character-info">
                <p>{char.name}</p>
                <p>Estatus: {charStatus(char.status)}</p>
                <p>Raza: {char.species}</p>
                <p>Género: {charGender(char.gender)}</p>
                <p>Origen: {char.origin.name}</p>
                <p>Última ubicación: {char.location.name}</p>
                <p>Debut: {debut}</p>
            </div>
        </div>
    );
}

export default CharacterCard;