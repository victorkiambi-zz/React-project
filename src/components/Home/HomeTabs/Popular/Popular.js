import React from "react";
import Toast from "react-bootstrap/Toast";
import MovieCards from "../../../MovieCards/MovieCards";

function Popular(props) {

    return(
        <MovieCards content={props.content}/>
    )
}
export default Popular;