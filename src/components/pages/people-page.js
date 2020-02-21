import React,{Component} from 'react'
import Row from "../row";
import {PersonList} from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";

export default class PeoplePage extends Component{

    render(){
        const id =this.props.match.params.id;
        return(
            <Row left={<PersonList onItemSelected={(id) => this.props.history.push(id)}></PersonList>}
                 right={<PersonDetails itemId={id}></PersonDetails>}>
            </Row>
        )
    }
}