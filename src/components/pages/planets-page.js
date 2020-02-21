import React,{Component} from 'react'
import Row from "../row";
import {PersonList, PlanetList} from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";

export default class PlanetPage extends Component{
    state = {
        selectedItem : null
    };
    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    };

    render(){
        return(
            <Row left={<PlanetList onItemSelected={this.onItemSelected}></PlanetList>}
                 right={<PlanetDetails itemId={this.state.selectedItem}></PlanetDetails>}></Row>
        )
    }
}