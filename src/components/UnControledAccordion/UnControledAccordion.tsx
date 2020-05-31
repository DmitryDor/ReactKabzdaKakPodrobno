import React, {useState} from "react";

type UnControledAccordionType = {
    titleValue: string

}

function UnControledAccordion(props: UnControledAccordionType) {
    console.log("UnControledAccordion rendering");

    let [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <UnControledAccordionTitle title={props.titleValue}/>
            <button onClick={ () => {setCollapsed(!collapsed)} }>Expand </button>
            {!collapsed  && <UnControledAccordionBody/>}
        </div>
    )
}


type UnControledAccordionTitlePropsType = {
    title: string
}

function UnControledAccordionTitle(props: UnControledAccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
    )
}

function UnControledAccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControledAccordion;