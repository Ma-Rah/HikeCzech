import React from "react";
import map from "./img/map.png";
import { Container, Image } from "react-bootstrap";

const MapPage = () => {
    return (
        <Container>
            <h1>Map Page</h1>

            <Image src={map} fluid />

            <div className="items">
                <div className="card">Difficulty</div>
                <div className="card">Elevation difference</div>
                <div className="card">Distance</div>
                <div className="card">Terrain Type</div>
                <div className="card">Ideal weather conditions</div>
                <div className="card">Weather warnings</div>
            </div>
        </Container>
    );
};

export default MapPage;
{
    /* <div className="map-page"></div> */
}
