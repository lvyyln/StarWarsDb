import React,{Component} from 'react'
import {StarshipList} from "../sw-components/item-lists";
import { withRouter } from 'react-router-dom'

class StarshipPage extends Component{
    render(){
        return(
            <StarshipList onItemSelected={(itemId) => {
                this.props.history.push(itemId)
            }}/>
        )
    }
}

export default withRouter(StarshipPage)