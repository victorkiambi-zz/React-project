import React, {useState} from "react";
import {Tab, TabPane} from "react-bootstrap";
import Movies from "../../Movies/Movies";
import Tv from "../../Tv/Tv";
import Home from "../../Home/Home";
import Tabs from "react-bootstrap/Tabs";
import Popular from "../../Home/HomeTabs/Popular/Popular";
import Trending from "../../Home/HomeTabs/Trending/Trending";
import Theatres from "../../Home/HomeTabs/Theatres/Theatres";

function MovieTabs(props) {
    const [key, setKey] = useState('home');
    props.getTrending(key);

    return (
        <TabPane>
            <Tabs defaultActiveKey="home" id="controlled-tab-example"  activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="home" title="Popular">
                    <Popular content={props.content}/>

                </Tab>
                <Tab eventKey="trending" title="Trending" >
                    <Trending trending={props.trending}/>
                </Tab>
                <Tab eventKey="theatres" title="Theatres" >
                    <Theatres/>
                </Tab>
            </Tabs>
        </TabPane>
    );
}
export default MovieTabs;