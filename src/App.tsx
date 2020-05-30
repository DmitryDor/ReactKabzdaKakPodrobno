import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Raiting} from "./components/Raiting/Raiting";


function App() {

    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Raiting value={3}/>
            <Accordion value={"Menu"}/>
            <Accordion value={"Users"}/>
            Article 2
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    debugger
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
