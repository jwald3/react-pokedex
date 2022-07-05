import React, { useContext} from 'react'
import { AppContext } from '../App'

const NavigationBar = () => {
    const { selectedCard, setSelectedCard } = useContext(AppContext);
    
    const navigateBack = () => {
        if (selectedCard > 1) {
            setSelectedCard(selectedCard - 1);
        }
    }

    const navigateForward = () => {
        if (selectedCard < 151) {
            setSelectedCard(selectedCard + 1);
        }
    }

    
    return (
        <div>
            <button onClick={() => navigateBack()}>Back</button>

            <button onClick={() => navigateForward()}>Next</button>
        </div>
    )
}

export default NavigationBar