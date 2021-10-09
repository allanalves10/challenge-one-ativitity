import { useState, KeyboardEvent } from "react";
import { Container } from "./styles"
import { AiFillPlusCircle } from 'react-icons/ai';

type PropsSave = {
    onSave: (taskName: string) => void;
}

export const AddArea = ({ onSave} : PropsSave) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '' && inputText.trim().length > 0) {
            onSave(inputText);
            setInputText('');
        }
    }

    return(
        <Container>
            <AiFillPlusCircle />
            <input 
                type="text" 
                placeholder="Adicionar tarefa" 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>
    )
}