import './index.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const JobsCard = props => {
  const { job } = props
  const { company_logo_url, employment_type, job_description, location, package_per_annum, rating, title } = job

  const navigate = useNavigate()
  const handleJobClick = () => {
    navigate(`/jobs/${job.id}`)
  }

  return (
    <>
      <Link to={`/jobs/${job.id}`} className="link-style">
        <li className="job-card" onClick={handleJobClick}>
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
                <span className="job-package">{package_per_annum}</span>
              </div>
            </div>
          </div>
          <hr />
          <h5>Description</h5>
          <p className="job-description">{job_description}</p>
        </li>
      </Link>
    </>
  )
}

export default JobsCard