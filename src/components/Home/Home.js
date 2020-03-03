import React, { useState, useEffect} from 'react';
import axios from 'axios'
import './Home.css';
import MovieCards from "../MovieCards/MovieCards";

function Home() {
    const [content, setContent] = useState([]);

    useEffect(()=>{
        let url = "https://api.themoviedb.org/3/discover/movie?api_key=b1422e7b80cff3571090be90e6544244&language=en-US&sort_by=popularity.desc&page=1";
        const fetchData = async()=> {
            const result = await axios.get(url);
            console.log(result.data.results)
            setContent(result.data.results);

        };
        fetchData().then(r => {
            console.log(r)
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

  return (
    <div className="App">
        <MovieCards content={content}/>
    </div>
  );
}

export default Home;
