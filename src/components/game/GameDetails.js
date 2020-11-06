import React, { useContext, useEffect } from "react"

import { GameContext } from './GameProvider'

export const GameDetails = (props) => {
    const {game, getSingleGame} = useContext(GameContext)


    useEffect(() => {
        const gameId = parseInt(props.match.params.gameId);
        getSingleGame(gameId);
    }, []);

    return (
        <div className="game-details">
            <div className="game-title">
                {game.title}
            </div>
            <div className="game-designer">
                {game.gamer.user.first_name} {game.gamer.user.last_name}
            </div>
            <div className="game-release">
                {game.year_released}
            </div>
            <div className="game-players">
                {game.number_of_players}
            </div>
            <div className="game-est-time">
                {game.estimated_time}
            </div>
            <div className="game-min-age">
                {game.minimum_age}
            </div>
        </div>
    )

};