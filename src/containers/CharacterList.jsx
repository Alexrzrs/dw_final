import React from 'react'
import '@styles/CharacterList.scss'
import CharacterCard from '@components/CharacterCard';

const CharacterList = ({ characters }) => {
    return (
        <div className="characters-cards">
            {characters.map((char) => (
                <CharacterCard char={char} key={char.id} />
            ))}
        </div>
    );
}

export default CharacterList;