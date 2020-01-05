import React,{Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from "../error-button";

export default class App extends Component  {

  state ={
      personSelectedId : null
  };

  onPersonSelected = (id) => {
    this.setState({
        personSelectedId : id
    });
    console.log(id);
  };

  render () {

      const {personSelectedId} = this.state;

      return (
          <div>
              <Header/>
              <RandomPlanet/>
              <div className="container boxing col-sm-12">
              <ErrorButton/>
              </div>
              <div className="row mb2">
                  <div className="col-md-6">
                      <ItemList onItemSelected={this.onPersonSelected}/>
                  </div>
                  <div className="col-md-6">
                      <PersonDetails personId = {personSelectedId}/>
                  </div>
              </div>
                  </div>
      )
  };
};
