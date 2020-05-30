import React, {useLayoutEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <AppTitle/>
            <Raiting/>
            <Accordion/>
            <Raiting/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return (
        <>This is APP component</>
    )
}

function Raiting() {
    console.log("Raiting rendering");
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    console.log("Star rendering")
    return <div>star</div>
}


function Accordion() {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default App;
