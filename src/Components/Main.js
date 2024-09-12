import React, { Component } from 'react'
import { ListPlayers } from '../Shared/ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: ListPlayers
        };
    }
    render() {
        return <PlayersPresentation players={this.state.players} />
    }
}
export default Main
