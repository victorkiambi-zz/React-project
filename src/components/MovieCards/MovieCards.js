import React from 'react';
import {Card, Col, CardGroup} from "react-bootstrap";

function MovieCards(props) {

    if (!props.content) {
        return (
            <CardGroup>
                {props.data.map((item, index) => (
                    <Col sm={4} md={4} lg={2}>
                        <Card bg="light" key={index}>
                            <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w300//" + item.poster_path} />
                        </Card>
                    </Col>
                ))}
            </CardGroup>
        )
    }
    else
        return (
            <CardGroup>
                {props.content.map((item, index) => (
                    <Col key={index} sm={4} md={4} lg={2}>
                        <Card bg="light" >
                            <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w300//" + item.poster_path}/>
                        </Card>
                    </Col>
                ))}
            </CardGroup>

        )
}

export default MovieCards