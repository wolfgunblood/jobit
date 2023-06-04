import React from 'react';
import './JobsTab.scss';

const JobsTab = ({ item, index }) => {

  const { logo, company, contract, tools, languages, role, position, level, featured, postedAt, location } = item;
  // console.log(logo)
  // console.log(CompanyLogo)
  return (
    <div className='job-card'>
      <div className='company-info-container'>
        <div className='company-logo-container'>
          <img src={logo} alt="Company Logo" className='company-logo' />
        </div>
        <div className='job-detail-container'>
          <div className='company-name-btn-container'>
            <p className='company-name'>{company}</p>
            <button className='btn btn-new'>New</button>
            <button className='btn btn-featured'>Featured</button>
          </div>
          <h4 className='position-name'>{position}</h4>
          <div className='posted-at-contract-location'>
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>

      <div className='btns-container'>
        <button className='btn'>{role}</button>
        <button className='btn'>{level}</button>
        {tools.map((tool, index) => (
          <button key={index} className='btn'>{tool}</button>
        ))}
        {languages.map((language, index) => (
          <button key={index} className='btn'>{language}</button>
        ))}
      </div>

    </div>
  )
}

export default JobsTab