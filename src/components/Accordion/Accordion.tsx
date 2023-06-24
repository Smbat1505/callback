import React from 'react';


type AccordionType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void,
}
export const Accordion: React.FC<AccordionType> = ({titleValue,collapsed, onChange}) => {
    return (
        <div>
            <AccordionTitle title={titleValue}  onChange={onChange}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};


type AccordionTitle = {
    title: string,
    onChange: () => void
}

function AccordionTitle({title, onChange}: AccordionTitle) {
    return (
        <h3 onClick={onChange}>{title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}

