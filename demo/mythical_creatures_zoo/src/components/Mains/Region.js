import React, { Component } from 'react';
import CreatureDetail from './CreatureDetail.js';

const Region = ({ filteredCreaturesArray = [] }) => {

    const renderCreatures = () => {
        filteredCreaturesArray.map((creature, index) => {
            return (
                <li key={index} className="creature_list">
                    <CreatureDetail
                        name={creature.name}
                        breed={creature.breed}
                        description={creature.description}
                    >
                    </CreatureDetail>
                </li>
            );
        })
    }

    const presentRegion = () => (
        <>
            <h4>Region: {filteredCreaturesArray[0].originLocation}</h4>
            {renderCreatures}
        </>
    );


    return (
        <ul>
            {presentRegion}
        </ul>
    );
}


export default Region;
