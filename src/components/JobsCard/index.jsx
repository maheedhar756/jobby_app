import './index.css'

const JobsCard = props => {
  const {job} = props
  const { company_logo_url, employment_type, job_description, location, package_per_annum, rating, title,
  } = job

  return (
    <div className="job-card">
      <div className="job-card-header">
        <img src={company_logo_url} alt="company logo" className="company-logo" />
        <div>
          <h2 className="job-title">{title}</h2>
          <p className="job-rating">⭐ {rating}</p>
        </div>
      </div>
      <div className="job-card-details">
        <p><b>Location:</b> {location}</p>
        <p><b>Employment Type:</b> {employment_type}</p>
        <p><b>Package:</b> {package_per_annum}</p>
      </div>
      <div className="job-card-description">
        <h3>Description</h3>
        <p>{job_description}</p>
      </div>
    </div>
  )
}

export default JobsCard