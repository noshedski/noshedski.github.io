import { useState } from "react";
import { useParams } from "react-router-dom";
export default function ViewGroup(){

    const { vgroup } =  useParams();

    const [brackets, setBracket] = useState([
        { user: "Goomba's bracket", points: '19/21', winner: 'Oilers', id: 1 },
        { user: "Pineapples's bracket", points: '15/21', winner: 'Oilers', id: 2 },
        { user: "Tree's bracket", points: '10/21', winner: 'Panthers', id: 3 },
      ])

    return(

        <div className="viewbrackets">

            <h1>Brackets:</h1>
            {brackets.map(bracket =>(
                <div>  
                    <p>{bracket.user}</p>
                    <p>{bracket.winner}</p>
                    <p>{bracket.points}</p>
                </div>
            ))}


        </div>

    );


}