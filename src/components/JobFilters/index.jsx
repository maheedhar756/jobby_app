import './index.css'

const JobFilters = ({
  employmentTypes = [],
  onEmploymentTypeChange = () => {},
  salaryRange = '',
  onSalaryRangeChange = () => {},
}) => (
  <div className="job-filters-container">
    <div className="filter-section">
      <h5 className="filter-title">Type of Employment</h5>
      <div className="filter-option">
        <input
          type="checkbox"
          id="fulltime"
          value="FULLTIME"
          checked={employmentTypes.includes('FULLTIME')}
          onChange={() => onEmploymentTypeChange('FULLTIME')}
        />
        <label htmlFor="fulltime">Full Time</label>
      </div>
      <div className="filter-option">
        <input
          type="checkbox"
          id="parttime"
          value="PARTTIME"
          checked={employmentTypes.includes('PARTTIME')}
          onChange={() => onEmploymentTypeChange('PARTTIME')}
        />
        <label htmlFor="parttime">Part Time</label>
      </div>
      <div className="filter-option">
        <input
          type="checkbox"
          id="freelance"
          value="FREELANCE"
          checked={employmentTypes.includes('FREELANCE')}
          onChange={() => onEmploymentTypeChange('FREELANCE')}
        />
        <label htmlFor="freelance">Freelance</label>
      </div>
      <div className="filter-option">
        <input
          type="checkbox"
          id="internship"
          value="INTERNSHIP"
          checked={employmentTypes.includes('INTERNSHIP')}
          onChange={() => onEmploymentTypeChange('INTERNSHIP')}
        />
        <label htmlFor="internship">Internship</label>
      </div>
    </div>
    <hr className="filter-divider" />
    <div className="filter-section">
      <h5 className="filter-title">Salary Range</h5>
      <div className="filter-option">
        <input
          type="radio"
          id="10lpa"
          name="salaryRange"
          value="10LPA"
          checked={salaryRange === '10LPA'}
          onChange={() => onSalaryRangeChange('10LPA')}
        />
        <label htmlFor="10lpa">10 LPA and above</label>
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="20lpa"
          name="salaryRange"
          value="20LPA"
          checked={salaryRange === '20LPA'}
          onChange={() => onSalaryRangeChange('20LPA')}
        />
        <label htmlFor="20lpa">20 LPA and above</label>
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="30lpa"
          name="salaryRange"
          value="30LPA"
          checked={salaryRange === '30LPA'}
          onChange={() => onSalaryRangeChange('30LPA')}
        />
        <label htmlFor="30lpa">30 LPA and above</label>
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="40lpa"
          name="salaryRange"
          value="40LPA"
          checked={salaryRange === '40LPA'}
          onChange={() => onSalaryRangeChange('40LPA')}
        />
        <label htmlFor="40lpa">40 LPA and above</label>
      </div>
    </div>
  </div>
)

export default JobFilters