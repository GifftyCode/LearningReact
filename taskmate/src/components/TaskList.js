import { useState } from 'react';
import TaskCard from './TaskCard';
import AlertsCard from './AlertsCard';
import './TaskList.css';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 5271, name: 'Record React Lectures', completed: true },
    { id: 7825, name: 'Edit React Lectures', completed: false },
    { id: 8391, name: 'Watch Lectures', completed: false },
  ]);

  const [show, setShow] = useState(true);

  const styles = {
    border: '1px solid',
    fontSize: '27px',
    borderRadius: '7px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderColor: show ? '#baffbf' : '#ffb4b4',
    color: show ? '#baffbf' : '#ffb4b4',
  };

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className='tasklist'>
      <h1 style={styles}>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)} className='trigger'>
          {show ? 'Hide' : 'Show'}
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>

      <AlertsCard result='success'>
        <p className='title'>Booking Confirmed.</p>
        <p className='description'>
          Your reservation for the upcoming weekend getaway has been
          successfully booked. Sit back and relax as we prepare for your arrival
          at our luxurious resort.
        </p>
      </AlertsCard>

      <AlertsCard result='warning'>
        <p className='title'>Payment Pending</p>
        <p className='description'>
          Attention: Your recent payment for the subscription renewal is still
          pending. To avoid service interruption, please settle the outstanding
          amount within 24 hours. Click the link provided in the email we sent
          you to complete the payment process. Thank you for your prompt
          attention to this matter.
        </p>
      </AlertsCard>
      <AlertsCard result='alert'>
        <p className='title'>Emergency Maintenance</p>
        <p className='description'>
          Urgent Notice: Our website will undergo scheduled maintenance tonight
          from 10:00 PM to 2:00 AM (GMT).{' '}
        </p>
      </AlertsCard>
    </div>
  );
}
