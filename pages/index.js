import { useState } from "react";

const Index = () => {

  const [userInput, setUserInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoList([userInput, ...toDoList])
    
    setUserInput('');
  }

  const handleDelete = (item) =>{
    const newList = toDoList.filter((todoItem) => item !== todoItem)
    setToDoList(newList);
  }

  return (
    <div>
      <h3> Next JS TO DO LIST</h3>
      <form>
        <input type="text" placeholder= "Enter a to do item" value={userInput} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {
          toDoList.length > 1 && toDoList.map((item, index) => {
            return <li key={index}>{item}<button onClick={(e) => {
              e.preventDefault();
              handleDelete(item);
            }}>Delete</button></li>
          })
        }
      </ul>
    </div>
  )
}

export default Index;