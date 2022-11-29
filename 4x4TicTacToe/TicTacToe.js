import { useState } from "react";
import "./TicTacToe.css";

function TicTacToe () 
{
  //Step 5 - State Creation
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(16).fill(""));
  const [winner, setWinner] = useState();

  //Step 7 - Creating the combos to check the winner  
  function winnerCondition (box)  
  {
    if (winner) {
      return;
    }
    let combos = {
      across: [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15]
      ],
      down: [
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15]
      ],
      diagonal: [
        [0,5,10,15],
        [3,6,9,12]
      ]
    };

    //Step 8 - Setting the winner using for in loop
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if 
        ( box[pattern[0]] === "" ||
          box[pattern[1]] === "" ||
          box[pattern[2]] === "" ||
          box[pattern[3]] === ""    ) 
        
        { //if Execution
          //Nothing to do here
        } 
        else if 
        ( box[pattern[0]] === box[pattern[1]] &&
          box[pattern[1]] === box[pattern[2]] &&
          box[pattern[2]] === box[pattern[3]] ) 
        
        {//else Execution
          setWinner(box[pattern[0]]);
        }
      });
    }
  };

 //Step 4 - Handle click function creation
  function handleClick (num) 
  {
    if (cells[num] !== "") {
      alert("Already Clicked");
      return;
    }
    
    //Step 6 - Setting the State value
    let box = [...cells];
    if (turn === "X") 
    {
      box[num] = "X";
      setTurn("O");
    } 
    else 
    {
      box[num] = "O";
      setTurn("X");
    }
    setCells(box);
    winnerCondition(box);
  };
  
  //Step 11 - Restart button function
  function restart ()  
  {
    setWinner(null);
    setCells(Array(16).fill(""));
  };
  
  //Step 2 - Creating the event in the box of the app
  function Cell ({ num })
  {
    return (
      <td onClick={() => handleClick(num)} className="data">
        {cells[num]}
      </td>
    );
  };

  //Step 1 - Creating the boxes 
  return (
    <div className="box">
      <h1 className="heading">Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
            <Cell num={3}/>
          </tr>
          <tr>
            <Cell num={4} />
            <Cell num={5} />
            <Cell num={6} />
            <Cell num={7}/>
          </tr>
          <tr>
            <Cell num={8} />
            <Cell num={9} />
            <Cell num={10} />
            <Cell num={11}/>
          </tr>
          <tr>
            <Cell num={12}/>
            <Cell num={13}/>
            <Cell num={14}/>
            <Cell num={15}/>
          </tr>
        </tbody>
      </table>
      
      {/* Step 9 - Winner Announcing*/}
      {winner && (
        <>
          <h2>{winner} is the winner!!!!!!</h2>
        </>
      )
      }
    
      {/* Step 10 - Restart Button */}
      {
      <div>
      <br/>
      <button className="restart-button" onClick={() => restart()}><h1>Play Again</h1></button>
      </div>
      }
    </div>
  );
};

export default TicTacToe;
