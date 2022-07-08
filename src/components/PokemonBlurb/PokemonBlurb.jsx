import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../App'
import './PokemonBlurb.css'

const PokemonBlurb = () => {
    const { speciesData } = useContext(AppContext)
    const [description, setDescription] = useState("")

    useEffect(() => {
        setDescription(speciesData['flavor_text_entries'][0]['flavor_text']);
    }, [speciesData])


    function stripNonPrintableAndNormalize(text) {
        // strip control chars
        text = text.replace(/\p{C}/gu, ' ');

        // other common tasks are to normalize newlines and other whitespace

        // normalize newline
        text = text.replace(/\n\r/g, '\n');
        text = text.replace(/\p{Zl}/gu, '\n');
        text = text.replace(/\p{Zp}/gu, '\n');

        // normalize space
        text = text.replace(/\p{Zs}/gu, ' ');

        return text;
    }

    return (
        <div className="blurb-container">{stripNonPrintableAndNormalize(description)}</div>
    )
}

export default PokemonBlurb;