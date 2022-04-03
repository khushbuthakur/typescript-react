import React, {useState} from 'react';

const AddToList: React.FC = () =>{

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: ""
    });

    /*
        to know type of e

        write this in the line 32
        onChange={(e)=>{}}

        and hover on e to get the type

        HTMLTextAreaElement is added for textarea field
    */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
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
                type="text" 
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
        </div>
    )
}

export default AddToList;