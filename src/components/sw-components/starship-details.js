import {SwapiServiceConsumer} from "../swapi-service-context";
import ItemDetails, {Record} from "../item-details";
import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData : swapiService.getStarship,
        getImageUrl : swapiService.getStarshipImage
    }
};

export default withSwapiService(StarshipDetails,mapMethodsToProps)