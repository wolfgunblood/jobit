import "./JobsContainer.scss";
import DataJobs from "../../data/DataJobs";
import JobsTab from '../JobsTab/JobsTab';

const JobsContainer = () => {

    // console.log(datajob);

  return (
    <div className='jobs-container'>
        {DataJobs.map((item : object, index :number) => (
            <JobsTab key={index} item={item} index={index}/>
        ))}
    </div>
  )
}

export default JobsContainer