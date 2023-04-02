import React, { useState } from 'react';

const statesGeneral = {
    reservations: [],
    generalPrice: 99,
};

const useStatesGeneral = () => { 

    const [states, setStates] = useState(statesGeneral);

    const addReservation = (item) => {
        setStates({
            ...states,
            reservations: [...states.reservations, item],
        });
    };

    const deleteReservation = (indexItem) => {
        const arrayReservations = states.reservations.filter(
            (item, index) => 
            index != indexItem
        );

        setStates({
            ...states,
            reservations: arrayReservations
        });
        console.log(indexItem);
    }

    return {
        states,
        addReservation,
        deleteReservation
    };
}

export default useStatesGeneral;