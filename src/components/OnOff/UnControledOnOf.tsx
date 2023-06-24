import React, {useState} from 'react';


type UnControledOnOfType = {
    onChange: (on: boolean) => void
}
export const UnControledOnOf: React.FC<UnControledOnOfType> = ({onChange}) => {
    const [on, setOn] = useState<boolean>(false);


    //  styles
    const onStyle = {
        width: "100px",
        height: "60px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        padding: "2px",
        background: on ? "green" : "white",
        cursor: "pointer",
    }

    const ofStyle = {
        width: "100px",
        height: "60px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        background: on ? "white" : "red",
        cursor: "pointer",

    }
    //  styles end


    const around = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        borderRadius: "10px",
        marginLeft: "2px",
        background: on ? "green" : "red",
    }

    const box = {
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }


    const onClicked = () => {
        setOn(true)
        onChange(true)
    }
    const ofClicked = () => {
        setOn(false)
        onChange(false)
    }
    return (
        <div style={box}>
            <button style={onStyle} onClick={onClicked}>on
            </button>
            <button style={ofStyle} onClick={ofClicked}>off
            </button>
            <div style={around}></div>
        </div>
    );
};

