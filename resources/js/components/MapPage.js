import React from "react";
import map from "./img/map.PNG";

const MapPage = () => {
    return (
        <div className="map-page">
            <h1>[Nav goes here]</h1>

            <img src={map} alt="Picture of map" />

            <div className="items">
                <div className="card">Difficulty</div>
                <div className="card">Elevation difference</div>
                <div className="card">Distance</div>
                <div className="card">Terrain Type</div>
                <div className="card">Ideal weather conditions</div>
                <div className="card">Weather warnings</div>
            </div>
        </div>
    );
};

export default MapPage;
