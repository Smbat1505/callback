import React, {useState} from 'react';
import './App.css';
import {UnRating} from "./components/UncontrolledRating/UnRating";
import {UnAccordion} from "./components/UncontrolledAccordion/UnAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnControledOnOf} from "./components/OnOff/UnControledOnOf";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const [switchOn, setSwitchOn] = useState<boolean>(false);
    return (
        <div className="App">
            <UnRating/>
            <UnAccordion titleValue={"Menu"}/>
            <UnAccordion titleValue={"bla"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"meny"} collapsed={collapsed} onChange={() => {
                setCollapsed(!collapsed)
            }}/>

            <UnControledOnOf onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

export default App;
