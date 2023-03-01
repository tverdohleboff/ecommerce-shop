import './App.css';
import { Counter } from './features/counter/Counter';
import LoginForm from './features/login/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, signOut } from './features/login/loginSlice';

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleSingOut = () => {
    dispatch(signOut());
  }

  return (
    <div className="App">
      <div>
        <span>
          Current user: {currentUser}
        </span>
        {currentUser !== 'Anon' ?
         <button 
          type='button'
          onClick={handleSingOut}
          >Sign Out</button> : null}
      </div>
      <Counter />
      <LoginForm />
    </div>
  );
}

export default App;
