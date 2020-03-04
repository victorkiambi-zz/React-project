import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieCards from "../MovieCards/MovieCards";

function Tv() {
    const [content, setContent] = useState([]);
    const url = "https://api.themoviedb.org/3/discover/tv?api_key=b1422e7b80cff3571090be90e6544244";

    useEffect(()=>{
        let newUrl = url+"&sort_by=popularity.desc&page=1";
        const fetchData = async()=> {
            const result = await axios.get(newUrl);
            setContent (result.data.results);
        };
        fetchData().then(r => {
            console.log(r)
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    return(
        <div className="App">
            <br></br>
            <MovieCards content={content}/>
        </div>
    )
}
export default Tv;