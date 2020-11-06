import React from "react"
import { Route } from "react-router-dom"

import { GameDetails } from './game/GameDetails'
import { GameList } from './game/GameList'
import { GameProvider } from './game/GameProvider'


export const ApplicationViews = (props) => {
    return (
    <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route exact path = "/games/:gameId(\d+)" render={
                    props => {
                        return <GameDetails {...props} />
                    }
                } />
                <Route exact path = "/games" render={
                    props => {
                        return <GameList {...props}/>
                    }
                } />
            </GameProvider>
            
        </main>
    </>

    )
    
}
