import React from 'react';
import ItemList from "../item-list/item-list";
import withData from '../hoc-helpers/with-data'
import withSwapiService from "../hoc-helpers/with-swapi-service";

const withChildFunction = (Wrapped, fn) => {
    return(props) => {
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const ListWithChildren = withChildFunction(
    ItemList,
    ({name}) => <span>{name}</span>
);

const mapPersonMethodsToProps = (swapiService) =>{
    return {
        getData : swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) =>{
    return {
        getData : swapiService.getAllPlanets
    }
};
const mapStarshipMethodsToProps = (swapiService) =>{
    return {
        getData : swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(withData(ListWithChildren),mapPersonMethodsToProps);
const StarshipList = withSwapiService(withData(ListWithChildren),mapStarshipMethodsToProps);
const PlanetList = withSwapiService(withData(ListWithChildren),mapPlanetMethodsToProps);

export {
    PersonList,
    StarshipList,
    PlanetList
};