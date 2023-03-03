import './App.css';
import './button.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, signOut } from './features/login/loginSlice';
import { clearTasksList } from './features/tasks/tasksSlice';
import LoginForm from './features/login/LoginForm';
import TasksList from './features/tasks/TasksList';
import TasksCreator from './features/tasks/TasksCreator';

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleSingOut = () => {
    dispatch(signOut());
    dispatch(clearTasksList());
  }

  return (
    <div className="App">
      {currentUser !== 'Anon' ?
      <div className='userNotAnon'>
        <span className='userName'>
          Ваше имя: {currentUser}
        </span>
         <button className="button buttonSignOut"
          type='button'
          onClick={handleSingOut}
          >Go out</button> 
      </div>
      : null}
      {currentUser === 'Anon' ?
      <LoginForm />
      : null}
      {currentUser !== 'Anon' ?
       <div className='tasks'>
        <TasksList />
        <TasksCreator /> 
       </div>
       : null}
    </div>
  );
}

export default App;
