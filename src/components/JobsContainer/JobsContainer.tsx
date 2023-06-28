import "./JobsContainer.scss";
import data from "../../data/data.json";
import JobsTab from '../JobsTab/JobsTab';

const JobsContainer = () => {

    console.log(data);

  return (
    <div className='jobs-container'>
        {data.map((item, index) => (
            <JobsTab key={index} item={item} index={index}/>
        ))}
    </div>
  )
}

export default JobsContainer