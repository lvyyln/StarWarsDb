import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import SpinnerAt from "../spinner";

export default class ItemList extends Component {

    swApiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
      this.swApiService
          .getAllPeople()
          .then((peopleList) => {
              this.setState({peopleList})
          })
    }

    renderItems = (arr) =>{
        return arr.map((person) =>{
            return(
                <li className="list-group-item"
                    key={person.id}
                    onClick={() => this.props.onItemSelected(person.id)}>
                    {person.name}
                </li>
            )
        })
    };

    render() {

      const {peopleList} = this.state;

      if(!peopleList) {return <SpinnerAt></SpinnerAt>}

      const items = this.renderItems(peopleList);

      return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
