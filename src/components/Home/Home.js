import React, { useState, useEffect} from 'react';
import axios from 'axios'
import MovieTabs from "../Utils/Tabs/MovieTabs";

function Home() {
    const [content, setContent] = useState([]);
    const [trending, setTrending] = useState([]);

    const url = "https://api.themoviedb.org/3/discover/movie?api_key=b1422e7b80cff3571090be90e6544244";

    useEffect(()=>{
        let newUrl = url+"&sort_by=popularity.desc&page=1";
        const fetchData = async()=> {
            const result = await axios.get(newUrl);
            setContent(result.data.results);
        };
        fetchData().then(r => {
            console.log(r)
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    function getTrending(key){
        if (key === "trending"){
            let newUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=b1422e7b80cff3571090be90e6544244"
            axios.get(newUrl)
                .then(r => {
                    setTrending(r.data.results);
                }).catch(function (error) {
                console.log(error);
            })
        }


    }


  return (
    <div className="App">
        <MovieTabs content={content} trending={trending} getTrending={getTrending}/>
    </div>
  );
}

export default Home;
