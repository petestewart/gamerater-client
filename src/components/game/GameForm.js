import React, {useContext, useEffect, useState} from "react"

import { GameContext } from "./GameProvider"

import "./GameForm.css"

export const GameForm = (props) => {
    const { createGame, getCategories, categories } = useContext(GameContext);

    const [ currentGame, setCurrentGame ] = useState({
        title: '',
        description: '',
        year_released: 1900,
        number_of_players: 1,
        estimated_time: 1,
        minimum_age: 0,
    });

    const [ category, setCategory ] = useState(0)

    useEffect(getCategories, [])

    const handleControlledInputChange = (e) => {
        const newGameState = { ...currentGame };
        if (e.target.name.includes('_')) {
            newGameState[e.target.name] = Number(e.target.value)
        }
        else {
            newGameState[e.target.name] = e.target.value
        }
        setCurrentGame(newGameState)
    };

    const handleCategoryInput = (e) => {
        setCategory(e.target.value)
    };

    return (
        <form className="gameForm">
            <h2>Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" className="form-control"
                    name="title"
                    value={currentGame.title}
                    onChange={handleControlledInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" className="form-control"
                    name="description"
                    value={currentGame.description}
                    onChange={handleControlledInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released: </label>
                    <input type="number" className="form-control"
                    min="1" max="2020"
                    name="year_released"
                    value={currentGame.year_released}
                    onChange={handleControlledInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number_of_players">Number Of Players: </label>
                    <input type="number" className="form-control"
                    min="1"
                    name="number_of_players"
                    value={currentGame.number_of_players}
                    onChange={handleControlledInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="estimated_time">Estimated Time (in hours): </label>
                    <input type="number" className="form-control"
                    min="0.5" step="0.5"
                    name="estimated_time"
                    value={currentGame.estimated_time}
                    onChange={handleControlledInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="minimum_age">Minimum Age: </label>
                    <input type="number" className="form-control"
                    min="0"
                    name="minimum_age"
                    value={currentGame.minimum_age}
                    onChange={handleControlledInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category: </label>
                    <select name="category" className="form-control"
                        value={category}
                        onChange={handleCategoryInput}
                    >
                        <option value="0">Select a category</option>
                        {
                            categories.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <button
                onClick={
                    (e) => {
                        e.preventDefault();
                        createGame(currentGame)
                            .then(() => {
                                props.history.push({ pathname: "/games" })
                            })
                    }
                }
            >Save</button>
        </form>
    )
};