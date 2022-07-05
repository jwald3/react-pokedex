import React, { useContext} from 'react'
import { AppContext } from '../../App'
import { IoCaretBack, IoCaretForward } from 'react-icons/io5'

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
        <div className='navigation-bar'>
            <button onClick={() => navigateBack()}><IoCaretBack/></button>

            <button onClick={() => navigateForward()}><IoCaretForward/></button>
        </div>
    )
}

export default NavigationBar