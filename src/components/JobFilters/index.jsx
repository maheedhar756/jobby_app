import './index.css'

const JobFilters = () => (
  <div className="job-filters-container">
    <div className="filter-section">
      <h5 className="filter-title">Type of Employment</h5>
      <div className="filter-option">
        <input type="checkbox" id="fulltime" name="employmentType" value="FULLTIME" />
        <label htmlFor="fulltime">Full Time</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="parttime" name="employmentType" value="PARTTIME" />
        <label htmlFor="parttime">Part Time</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="freelance" name="employmentType" value="FREELANCE" />
        <label htmlFor="freelance">Freelance</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="internship" name="employmentType" value="INTERNSHIP" />
        <label htmlFor="internship">Internship</label>
      </div>
    </div>
    <hr className="filter-divider" />
    <div className="filter-section">
      <h5 className="filter-title">Salary Range</h5>
      <div className="filter-option">
        <input type="radio" id="10lpa" name="salaryRange" value="10LPA" />
        <label htmlFor="10lpa">10 LPA and above</label>
      </div>
      <div className="filter-option">
        <input type="radio" id="20lpa" name="salaryRange" value="20LPA" />
        <label htmlFor="20lpa">20 LPA and above</label>
      </div>
      <div className="filter-option">
        <input type="radio" id="30lpa" name="salaryRange" value="30LPA" />
        <label htmlFor="30lpa">30 LPA and above</label>
      </div>
      <div className="filter-option">
        <input type="radio" id="40lpa" name="salaryRange" value="40LPA" />
        <label htmlFor="40lpa">40 LPA and above</label>
      </div>
    </div>
  </div>
)

export default JobFilters