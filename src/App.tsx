import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Raiting} from "./components/Raiting/Raiting";
import OnOff from "./OnOff/OnOff";
import UnControledAccordion from "./components/UnControledAccordion/UnControledAccordion";
import {UnControledRaiting} from "./components/UnControledRaiting/UnControledRaiting";


function App() {

    console.log("App rendering")


    return (

        <div className={"App"}>
            <div>
                <OnOff/>
                <OnOff/>
                <OnOff/>
                <OnOff/>
                <OnOff/>
                <OnOff/>
            </div>
            <div>
                <UnControledAccordion titleValue={"Menu"}/>
                <UnControledAccordion titleValue={"Users"}/>
            </div>
            <div>
                <UnControledRaiting />
            </div>
        </div>
        /* <div className="App">
             <PageTitle title={"This is APP component"}/>
             <PageTitle title={"My friends"}/>
             Article 1
             <Raiting value={3}/>
             <Accordion titleValue={"Menu"} collapsed={true}/>
             <Accordion titleValue={"Users"} collapsed={false}/>
             Article 2
             <Raiting value={0}/>
             <Raiting value={1}/>
             <Raiting value={2}/>
             <Raiting value={3}/>
             <Raiting value={4}/>
             <Raiting value={5}/>
         </div>*/

    );


}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
