import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice'


const TasksCreator = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const dispatch = useDispatch();

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
  }

  function handleDateChange(event) {
    const value = event.target.value;
    setDate(value);
  }

  function validateFields(){
    if(name === '') {  
      setErrorName('Имя не может быть пустым');
    } else {
      setErrorName(false);
    }

    if(date === '') {
      setErrorDate('Дата задачи не может быть пустой');
    } else {
      setErrorDate(false);
    }

    return name !== '' &&  date !== '';
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const validationSuccess = validateFields();
    if(validationSuccess) {
        createTask();
      }
  }  

  function clearFields(){
    setName('');
    setDate('');
  }

  const createTask = () => {
    const payload = {
      name: name,
      date: date
    };
    dispatch(addTask(payload));
    clearFields();
  }

  return (
    <div className="tasksCreator">
      <h3>
        Новое дело:
      </h3>
      <div>
          <label htmlFor='name'>Что нужно сделать</label>
          <input 
            type='text' 
            name='name' 
            id='name' 
            value={name} 
            onChange={handleNameChange} 
          />
          {errorName !== false ? <div className='redText'>
            {errorName}</div> : null}
        </div>
      <div>
          <label htmlFor='date'>Когда нужно сделать</label>
          <input 
            type='datetime-local' 
            name='date' 
            id='date' 
            value={date}
            min="2020-01-01T00:30" 
            max="2040-12-31T23:30"
            onChange={handleDateChange} 
          />
          {errorDate !== false ? <div className='redText'>
            {errorDate}</div> : null}
      </div>
      <div>
          <button 
            className="button buttonCreateTask"
            type='submit'
            onClick={handleSubmitForm}
          >Создать дело</button>
        </div>
    </div>
  )
}

export default TasksCreator;