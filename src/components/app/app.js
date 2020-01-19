import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorButton from "../error-button";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        id: 3
    };

    onPersonSelected = (id) => {
        this.setState({
            personSelectedId: id
        });
        console.log(id);
    };


    render() {

        const {personSelectedId} = this.state;

        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <div className="container boxing col-sm-12">
                    <ErrorButton/>
                </div>
                <PeoplePage/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList getData = {() => this.swapiService.getAllPlanets()} onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={personSelectedId}/>
                    </div>
                </div>
            </div>
        )
    };

};
