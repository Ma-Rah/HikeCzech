import React from "react";

import { Jumbotron, Container } from "react-bootstrap";

function Jumbo() {
    return (
        <Jumbotron fluid>
            <Container>
                <h2 className="text-primary my-3">Pick your next adventure</h2>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;
