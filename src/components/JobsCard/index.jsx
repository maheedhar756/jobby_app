import './index.css'

const JobsCard = props => {
  const {job} = props
  const { company_logo_url, employment_type, job_description, location, package_per_annum, rating, title,
  } = job

  return (
    <li className="job-card">
      <div className="job-card-header">
        <img src={company_logo_url} alt="company logo" className="job-logo" />
        <div>
          <h1 className="job-title">{title}</h1>
          <div className="job-rating">
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
            <span>{rating}</span>
          </div>
        </div>
      </div>
      <p className="job-description">{job_description}</p>
      <div className="job-details">
        <span className="job-location">{location}</span>
        <span className="job-type">{employment_type}</span>
        <span className="job-package">{package_per_annum}</span>
      </div>
    </li>
  )
}

export default JobsCard