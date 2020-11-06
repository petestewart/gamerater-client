import React, { useState } from 'react';

export const GameContext = React.createContext();

export const GameProvider = (props) => {
    const [games, setGames] = useState([]);
    const [game, setGame] = useState({
        gamer: {
            user: {}
        }
    });

    const getAllGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })
            .then(r => r.json())
                .then(setGames)
    };

    const getSingleGame = (gameId) => {
        return fetch(`http://localhost:8000/games/${gameId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })
            .then(r => r.json())
                .then(setGame)
    };

    return (
        <GameContext.Provider
            value={{
                games, getAllGames, getSingleGame, game
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
};