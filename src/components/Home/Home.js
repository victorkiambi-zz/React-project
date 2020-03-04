import React, { useState, useEffect} from 'react';
import axios from 'axios'
import MovieTabs from "../Utils/Tabs/MovieTabs";
import MovieJumbotron from "../Utils/Jumbotron/MovieJumbotron";

function Home() {
    const [data, setData] = useState([]);
    const [content, setContent] = useState([]);


    const url = "https://api.themoviedb.org/3/discover/movie?api_key=b1422e7b80cff3571090be90e6544244";

    useEffect(()=>{
        let newUrl = url+"&sort_by=popularity.desc&page=1";
        const fetchData = async()=> {
            const result = await axios.get(newUrl);
            setData(result.data.results);
        };
        fetchData().then(r => {
            console.log(r)
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    function getTrending(key){
        if (key === "popular"){
            let newUrl = url+"&sort_by=popularity.desc&page=1";
            getContent(newUrl);
        }
        if (key === "trending"){
            let newUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=b1422e7b80cff3571090be90e6544244";
            getContent(newUrl)
        }
        if (key === "theatres"){
            let newUrl = url+"&include_adult=false&include_video=false&page=1&primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-03-03";
            getContent(newUrl)
        }
    }
    function getContent(newUrl){
        axios.get(newUrl)
            .then(r => {
                setContent(r.data.results);
            }).catch(function (error) {
            console.log(error);
        })
    }

  return (
    <div className="App">
        <br></br>
        <MovieJumbotron/>
        <MovieTabs content={content} data={data} getTrending={getTrending}/>


    </div>
  );
}

export default Home;
