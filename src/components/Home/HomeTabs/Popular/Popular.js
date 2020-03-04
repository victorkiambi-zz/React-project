import React from "react";
import MovieCards from "../../../MovieCards/MovieCards";

function Popular(props) {

    return(
        <MovieCards content={props.data}/>
    )
}
export default Popular;