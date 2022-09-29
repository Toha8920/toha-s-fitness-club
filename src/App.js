import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Exercises from './components/Exercises/Exercises';
import Question from './components/Question/Question';
import Question2 from './components/Question2/Question2';
import Question3 from './components/Question3/Question3';




function App() {
  return (
    <div className='full-layout'>
      <h1 className='icon text-4xl mt-2'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Toha's-Fitness-Club</h1>
      <h2 className='text-3xl mt-2 mb-2'>Select Today's Exercise </h2>
      <Exercises></Exercises>
      <Question></Question>
      <Question2></Question2>
      <Question3></Question3>
    </div>
  );
}

export default App;
