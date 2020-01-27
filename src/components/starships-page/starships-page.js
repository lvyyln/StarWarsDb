import ItemList from "../item-list";
import PersonDetails from "../person-details";
import React, {Component} from 'react';
import SwapiService from "../../services/swapi-service";

export default class StarshipsPage extends Component {

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

    render(){

        const {personSelectedId} = this.state;

        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        getData = {() => this.swapiService.getAllPlanets()}
                        onItemSelected={this.onPersonSelected}
                        renderItem = {(item) => `${item.name}`}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={personSelectedId}/>
                </div>
            </div>
        )
    }
}