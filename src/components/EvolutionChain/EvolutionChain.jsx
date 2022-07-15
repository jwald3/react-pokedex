import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../App'
import axios from 'axios'

const EvolutionChain = () => {
    /*
        Planned future functionality for taking the "evolution_chain" property and creating a new element
        This will return an array of each evolution stage 
        each evolution stage will be an individual card, they will be contained in one overarching div
    */
    
    const { speciesData } = useContext(AppContext);
    const [evolutionURL, setEvolutionURL] = useState();
    const [chainLinks, setChainLinks] = useState([]);

    useEffect(() => {
        setEvolutionURL(speciesData['evolution_chain']['url'])
    }, [speciesData]);


    return (
        <div>EvolutionChain</div>
    )
}

export default EvolutionChain