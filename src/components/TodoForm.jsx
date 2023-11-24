import { useState } from 'react';


const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    //
    setNewTodo('');
  }

  return (
      <form onSubmit={handleSubmit} className="max-w-full lg:w-1/2 flex justify-center self-center gap-2">
        <div>
          <input 
            type="text" 
            className='rounded-sm px-2 py-1' 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)}/>
        </div>
        <div>
          <button type="submit" className="bg-slate-300 px-2 py-1 rounded-sm">+</button>
      </ div>
      </form>
  )
}

export default TodoForm
