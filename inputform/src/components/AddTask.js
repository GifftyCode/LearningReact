import { useState } from 'react';
import './AddTask.css';

export const AddTask = ({ tasks, setTasks }) => {
  const [inputValue, setInputValue] = useState('');
  const [progress, setProgress] = useState(false);

  const handleReset = () => {
    setInputValue('');
    setProgress(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: inputValue,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
  };
  return (
    <section className='addtask'>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type='text'
          name='task'
          id='task'
          placeholder='Enter a Task'
          autoComplete='off'
          value={inputValue}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value='false'>Pending</option>
          <option value='true'>Completed</option>
        </select>
        <button type='submit'>Add</button>
        <span onClick={handleReset} className='reset'>
          Reset
        </span>
      </form>
    </section>
  );
};
