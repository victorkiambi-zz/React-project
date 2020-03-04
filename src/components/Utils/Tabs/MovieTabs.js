import React, {useState} from "react";
import {Tab, TabPane} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Popular from "../../Home/HomeTabs/Popular/Popular";
import Trending from "../../Home/HomeTabs/Trending/Trending";
import Theatres from "../../Home/HomeTabs/Theatres/Theatres";

function MovieTabs(props) {
    const [key, setKey] = useState("popular");

    function handleSelect(key) {
        if (key === "popular") {
            setKey("popular");
        }
        if (key === "trending") {
            setKey("trending")
        } if(key === "theatres"){
            setKey("theatres")
        }

        props.getTrending(key);
    }

    return (
        <TabPane>
            <Tabs defaultActiveKey="popular" id="controlled-tab-example"  activeKey={key} onSelect={handleSelect}>
                <Tab eventKey="popular" title="Popular">
                    <Popular data={props.data}/>
                </Tab>
                <Tab eventKey="trending" title="Trending" >
                    <Trending content={props.content}/>
                </Tab>
                <Tab eventKey="theatres" title="Theatres" >
                    <Theatres content={props.content}/>
                </Tab>
            </Tabs>
        </TabPane>

);
}
export default MovieTabs;