import "./App.css";
import Header from "../images/bg-header-desktop.svg";
import JobsContainer from './components/JobsContainer/JobsContainer';

const App = () => {
  return (
    <div className='App'>
      <img src={Header} alt="header" className='headerImage' />
      <JobsContainer />
    </div>
  )
}

export default App