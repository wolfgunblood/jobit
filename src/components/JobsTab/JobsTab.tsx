import React from 'react';
// import CompanyLogo from "./images/loop-studios.svg"

const JobsTab = ({item,index}) => {

  const {logo,company} = item;
  // console.log(logo)
  // console.log(CompanyLogo)
  return (
    <div className='job-card'>
      <div>
        <img src={logo} alt="Company Logo" className='company-logo'/>
        <div className='company-info'>
          <h3 className='company-name'>{company}</h3>
        </div>
      </div>
    </div>
  )
}

export default JobsTab