import React from "react";

import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeCard() {
    return (
        <Card className="my-3 shadow w-100">
            <Card.Body>
                <Card.Title className="">Trail Name</Card.Title>
                <Card.Img variant="top" src="https://picsum.photos/400/299" />
                <Card.Text className="p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae praesentium in eveniet mollitia vitae alias? Suscipit
                    aut facilis odit, saepe repudiandae placeat iusto ex
                    architecto culpa illo praesentium recusandae hic?
                </Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>Type: Family fun</ListGroup.Item>
                    <ListGroup.Item>Difficulty: 4/5</ListGroup.Item>
                    <ListGroup.Item>Rating: 5/5</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Link to="/test">
                <button type="button" class="btn btn-primary w-100">
                    Find out more
                </button>
            </Link>
            {/* <Button variant="primary">Find out more</Button> */}
        </Card>
    );
}

export default HomeCard;
