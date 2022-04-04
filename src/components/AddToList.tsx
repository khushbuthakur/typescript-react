import React, {useState} from 'react';
import {IState as Props} from '../App';

interface IProps{
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const emptyState = {
    name: "",
    age: "",
    img: "",
    note: ""
};

const AddToList: React.FC<IProps> = ({people, setPeople}) =>{

    const [input, setInput] = useState(emptyState);

    /*
        to know type of e

        write this in the line 32
        onChange={(e)=>{}}

        and hover on e to get the type

        HTMLTextAreaElement is added for textarea field

        void -> return type is nothing
    */

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    const handleClick = (): void =>{
        if(!input.name || !input.age || !input.img){
            alert("Please fill all the fields");
            return;
        }

        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ]);

        setInput(emptyState);
    }

    return(
        <div className="AddToList">
            <h1>Add to list</h1>
            <input 
                type="text" 
                placeholder="Name" 
                name="name"
                value={input.name}
                className="AddToList-input"
                onChange={handleChange}
                //onChange={(e)=>{}}
            />

            <input 
                type="number" 
                placeholder="Age" 
                name="age"
                value={input.age}
                className="AddToList-input"
                onChange={handleChange}
            />

            <input 
                type="text" 
                placeholder="Image URL" 
                name="img"
                value={input.img}
                className="AddToList-input"
                onChange={handleChange}
            />

            <textarea 
                 placeholder="Notes" 
                 value={input.note}
                 name="note"
                className="AddToList-input"
                onChange={handleChange}
                ></textarea>

                <button 
                    className="AddToList-btn"
                    onClick={handleClick}
                >Add to list</button>
        </div>
    )
}

export default AddToList;