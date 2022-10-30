import React, { useState } from 'react';

const PersonCard = (props) => {
    const [state, setState] = useState({
        birthday: props.age
    });

    const incBirthday = () => {
        setState({
            birthday: state.birthday + 1
        });
    }

    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>{state.birthday}</p>
            <p>{props.hairColor}</p>
            <button onClick={ incBirthday }>Birthday button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default PersonCard;