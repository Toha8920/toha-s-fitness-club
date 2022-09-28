import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Exercises from './components/Exercises/Exercises';



function App() {
  return (
    <div>
      <h1 className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Toha's-Fitness-Club</h1>
      <h2>Select Today's Exercise </h2>
      <Exercises></Exercises>
    </div>
  );
}

export default App;
