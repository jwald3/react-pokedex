import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../App'
import axios from 'axios'

const EvolutionChain = () => {
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