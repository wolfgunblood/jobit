import "./JobsContainer.scss";
import datajob from "../../data/datajob"
import JobsTab from '../JobsTab/JobsTab';

const JobsContainer = () => {

    console.log(datajob);

  return (
    <div className='jobs-container'>
        {datajob.map((item, index) => (
            <JobsTab key={index} item={item} index={index}/>
        ))}
    </div>
  )
}

export default JobsContainer