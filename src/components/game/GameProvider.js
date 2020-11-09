import React, { useState } from 'react';

export const GameContext = React.createContext();

export const GameProvider = (props) => {
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);

    const [game, setGame] = useState(
        {
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

    const createGame = (game, category) => {
        return fetch("http://localhost:8000/games", {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("rare_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        })
            .then((res) => fetch("http://localhost:8000/gamecategory", {
                method: "POST",
                headers:{
                    "Authorization": `Token ${localStorage.getItem("rare_token")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({game_id: res.id, category_id: category})
            }))
    };

    const getCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })
            .then(r => r.json())
                .then(setCategories)
    };

    return (
        <GameContext.Provider
            value={{
                games, getAllGames, getSingleGame, game, categories, getCategories, createGame
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
};