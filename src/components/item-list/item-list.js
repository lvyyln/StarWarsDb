import React, {Component} from 'react';

import './item-list.css';
import SpinnerAt from "../spinner";

export default class ItemList extends Component {

    state = {
        peopleList: null
    };

    componentDidMount() {
        const getData = this.props.getData;

        getData()
            .then((peopleList) => {
                this.setState({peopleList})
            })
    }

    renderItems = (arr) => {
        return arr.map((person) => {
            return (
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

        if (!peopleList) {
            return <SpinnerAt></SpinnerAt>
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
