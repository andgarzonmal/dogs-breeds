import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Search For Your Breed</h1>
      </div>
      <div className="size-filter">
        <Link to="/Large" className="size-container">
          <h3>Large</h3>
          <img id="large-dog" src="https://github.com/andgarzonmal/programa/blob/master/newfoundland-512-removebg-preview.png?raw=true" alt="Large Dog" />
        </Link>
        <Link to="/Medium" className="size-container">
          <h3>Medium</h3>
          <img id="medium-dog" src="https://github.com/andgarzonmal/programa/blob/master/png-clipart-border-collie-rough-collie-bearded-collie-puppy-puppy-animals-carnivoran-thumbnail-removebg-preview.png?raw=true" alt="medium Dog" />
        </Link>
        <Link to="/Small" className="size-container">
          <h3>Small</h3>
          <img id="small-dog" src="https://github.com/andgarzonmal/programa/blob/master/il_570xN.1937504831_lai2-removebg-preview.png?raw=true" alt="small dog" />
        </Link>
      </div>
      <div id="patitas">
        <img src="https://github.com/andgarzonmal/new_repo/blob/main/shutterstock-624365147-scaled-e1618226641254-removebg-preview.png?raw=true" alt="patitas" />
        <img src="https://github.com/andgarzonmal/new_repo/blob/main/shutterstock-624365147-scaled-e1618226641254-removebg-preview.png?raw=true" alt="patitas" />
        <img src="https://github.com/andgarzonmal/new_repo/blob/main/shutterstock-624365147-scaled-e1618226641254-removebg-preview.png?raw=true" alt="patitas" />
        <img src="https://github.com/andgarzonmal/new_repo/blob/main/shutterstock-624365147-scaled-e1618226641254-removebg-preview.png?raw=true" alt="patitas" />
        <img src="https://github.com/andgarzonmal/new_repo/blob/main/shutterstock-624365147-scaled-e1618226641254-removebg-preview.png?raw=true" alt="patitas" />
        <img src="https://github.com/andgarzonmal/new_repo/blob/main/shutterstock-624365147-scaled-e1618226641254-removebg-preview.png?raw=true" alt="patitas" />
      </div>
    </div>
  );
}
