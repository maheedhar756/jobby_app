import { Link } from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div className="bg-container">
      <Header />
      <div className='home-content'>
        <h1 className='home-heading'>Find The Job That <br /> Fits Your Life</h1>
        <p className='home-para'>Millions of people are searching for jobs, salary <br />
          information, company reviews. Find the job that fits your <br />
          abilities and potential.
        </p>
        <Link to="/jobs" className='home-link'>
          <button className='home-btn'>Find Jobs</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;