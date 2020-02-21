import React, {Component} from 'react';
import {PeoplePage} from '../pages'
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import './app.css';
import StarshipPage from "../pages/starship-page";
import PlanetPage from "../pages/planets-page";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";
import StarshipDetails from "../sw-components/starship-details";
import Redirect from "react-router-dom/es/Redirect";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false,
        showRandomPlanet: true
    };

    onLogin = () => {
        this.setState({isLoggedIn: true})
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <BrowserRouter>
                        <div className="stardb-app">
                            <Header/>
                            {planet}
                            <Switch>
                                <Route path="/login" render={() => <LoginPage isLoggedIn={this.state.isLoggedIn}
                                                                              onLogin={this.onLogin}/>}></Route>
                                <Route path="/secret"
                                       render={() => <SecretPage isLoggedIn={this.state.isLoggedIn}/>}></Route>
                                <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>}></Route>
                                <Route component={PeoplePage} path="/people/:id?"/>
                                <Route component={PlanetPage} path="/planets/"/>
                                <Route component={StarshipPage} exact path="/starships/"/>
                                <Route
                                    render={({match, location, history}) => <StarshipDetails itemId={match.params.id}/>}
                                    path="/starships/:id"/>
                                <Redirect to="/"/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
