import React from "react";
import '@styles/EpisodeCard.scss';

const EpisodeCard = ({episode}) => {
    return (
        <div className="episode-card">
            <div className="episode-info">
                <div>
                    <p>{episode.name}</p>
                    <p>Episodio: {episode.episode}</p>
                    <p>Estreno: {episode.air_date}</p>
                </div>
            </div>
        </div>
    );
}

export default EpisodeCard;