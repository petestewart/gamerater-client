import React, {useContext, useEffect} from "react"
import { Link } from "react-router-dom"

import { GameContext } from "./GameProvider"

import "./GameList.css"

export const GameList = (props) => {
    const {games, getAllGames} = useContext(GameContext)

    useEffect(() => {
        getAllGames()
    }, [])


    return (
        <>
        <div className="game-container">
            <h3>
                Games
            </h3>
            
            <div className="games">
                <button onClick={ () => {
                    props.history.push({ pathname: "/games/new" })
                }
                }>
                    Register New Game
                </button>

                {
                    games.map(game => <Link to={`/games/${game.id}`}>
                        <div>{game.title}</div>
                        </Link>)
                }
            </div>
        </div>
        </>
    )
}



