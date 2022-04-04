import React from 'react'
import {IState as IProps} from '../App';

// interface IProps{
//     people: {
//       name: string
//       age: number
//       url: string
//       note?: string
//     }[]; // <- we use to define an array of objects
// }

const List: React.FC<IProps> = ({people}) =>{
    // we want to return an array of JSX elements -> JSX.Element[]
    const renderList = (): JSX.Element[] =>{
        return people.map((person) =>(
            <li key={person.name} className="List">
                <div className="List-header">
                    <img className="List-img" src={person.img} alt={person.name}/>
                    <h2>{person.name}</h2>
                </div>

                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
        ))
    }

    return(
        <div>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

// function List(props: IProps) {
//     return (
//         <ol>
         
//         </ol>
//     )
// }

export default List;
