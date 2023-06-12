import React, { useState } from 'react'

function Todo() {
    const[value, setValue] = useState("")
    const[todo, setTodo] = useState([])

    const handleChange = (e) => {
        setValue(e.target.value)

    }
    const handleClick = () => {
        let obj = {
            todoData : value,
            id : Date.now()
        }
        
        
        setTodo([...todo,obj])
        setValue("")
        
    }
    const handleCross = (id) => {
        let deletedTodos = todo.filter((each) => {
            if(each.id !== id){
                return each
                
            }
        })
        setTodo(deletedTodos)
        



    
    }
  return (
    <div className='container'>
        <center>
        <header>
            <h1>TODO LIST</h1>
        </header>
        <div className='inputdiv'>
            <input value={value} onChange={(e) => handleChange(e)} className='input' type="text" placeholder='Enter your todo list' />
            <button onClick={() => handleClick()} className='add'>Add</button>
            {todo.map((each) => {
                return(
                    <>
                    <div className=' todo flex '>
                    <h2 className='text'>{each.todoData}</h2>
                    <h2 onClick={() => handleCross(each.id)} className='cross'>❌</h2>

                    </div>
                    
                    </>
                )

            })}

        </div>

        </center>
        
    </div>
  )
}

export default Todo