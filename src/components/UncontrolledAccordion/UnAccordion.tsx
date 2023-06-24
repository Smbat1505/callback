import React, {useState} from 'react';

type UnAccordionType = {
    titleValue: string,

}
export const UnAccordion: React.FC<UnAccordionType> = ({titleValue}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title={titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};


type AccordionTitleType = {
    title: string,
    onClick: () => void,
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
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

