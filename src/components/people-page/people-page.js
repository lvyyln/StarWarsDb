import React, {Component} from 'react';
import PersonDetails from "../person-details";
import ItemList from '../item-list';
import './people-page.css';
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {

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

        const{personSelectedId} = this.state;
        return (
            <div className="row mb2 data-box-container">
                <div className="col-md-6">
                    <ItemList getData={() => this.swapiService.getAllPeople()} onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={personSelectedId}/>
                </div>
            </div>
        )
    }
}