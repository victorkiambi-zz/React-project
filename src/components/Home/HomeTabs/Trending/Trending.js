import React from "react";
import MovieCards from "../../../MovieCards/MovieCards";

function Trending(props) {

    return(
        <MovieCards content={props.content}/>
    )
}
export default Trending;