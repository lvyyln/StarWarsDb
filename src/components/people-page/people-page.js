import React, {Component} from 'react';
import PersonDetails from "../person-details";
import ItemList from '../item-list';
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import {Row} from "../row/row";


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
        const {personSelectedId} = this.state;
        const personDetails = (<PersonDetails personId={personSelectedId}/>);
        const itemList = (
            <ItemList getData={() => this.swapiService.getAllPeople()}
                      onItemSelected={this.onPersonSelected}>
                {(item) => `${item.name}  (${item.gender} ${item.birthYear})`}
            </ItemList>);
        return (
            <Row left={itemList} right={personDetails}/>
        )
    }
}