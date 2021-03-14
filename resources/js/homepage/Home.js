import React from "react";
import HomeCard from "./HomeCard";
import Car from "./Car";
import Jumbo from "./Jumbo";

import { Container } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <Jumbo />
            <Car />
            <HomeCard />
            <HomeCard />
            <HomeCard />
        </Container>
    );
}

export default Home;
