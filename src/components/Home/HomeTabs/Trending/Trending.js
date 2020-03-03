import React from "react";
import MovieCards from "../../../MovieCards/MovieCards";

function Trending(props) {

    return(
        <MovieCards trending={props.trending}/>
    )
}
export default Trending;