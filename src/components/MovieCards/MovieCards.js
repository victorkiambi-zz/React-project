import React from 'react';
import {CardDeck, Card, Button, Row, Col, CardColumns, CardGroup} from "react-bootstrap";

function MovieCards(props) {

    return (
        <CardGroup>
            {props.content.map((item, index) => (
                <Col sm={4} md={4} lg={2}>
                    <Card key={index}  >
                        <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w300//"+item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                        </Card.Body>
                        <Card.Text>{item.overview}</Card.Text>

                    </Card>
                </Col>
            ))}
        </CardGroup>
    )
}

export default MovieCards