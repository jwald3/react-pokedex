import React, { useContext} from 'react'
import { AppContext } from '../../App'
import { IoCaretBack, IoCaretForward, IoCloseCircle } from 'react-icons/io5'
import './NavigationBar.css'

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

    const closeBtn = () => {
        setSelectedCard(0);
    }

    
    return (
        <div className='navigation-bar'>
            <div className="arrow-bar">
                <button className={selectedCard > 1 ? "": "only-forward"} onClick={() => navigateBack()}><IoCaretBack/></button>
                <button className={selectedCard < 151 ? "": "only-back"} onClick={() => navigateForward()}><IoCaretForward/></button>
            </div>
            <div className='close-btn' onClick={() => closeBtn()}><IoCloseCircle/></div>
        </div>
    )
}

export default NavigationBar