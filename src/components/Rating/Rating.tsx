import React from 'react';


type StarType = {
    selected: boolean,
    value: RatingValueType,
    onClick: (value: RatingValueType) => void,
}
const Star: React.FC<StarType> = ({selected, onClick, value}) => {
    return (
        <span onClick={() => {
            onClick(value)
        }}>{selected ? <b>star </b> : "star "}</span>
    )
}
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type RatingType = {
    value: RatingValueType,
    onClick: (value: RatingValueType) => void
}
export const Rating: React.FC<RatingType> = ({value, onClick}) => {
    return (
        <div>
            <Star selected={value > 0} onClick={onClick} value={1}/>
            <Star selected={value > 1} onClick={onClick} value={2}/>
            <Star selected={value > 2} onClick={onClick} value={3}/>
            <Star selected={value > 3} onClick={onClick} value={4}/>
            <Star selected={value > 4} onClick={onClick} value={5}/>
        </div>
    );
};

