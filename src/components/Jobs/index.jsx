import AllJobCards from "../AllJobCards";
import Header from '../Header'
import './index.css'
import ProfileCard from "../ProfileCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import JobFilters from "../JobFilters";

const Jobs = () => {
  return (
    <>
      <div className="jobs-container">
        <Header />
        <div className="jobs-content">
          <div className="left-column">
            <ProfileCard />
            <JobFilters />
          </div>
          <div className="right-column">
            <AllJobCards />
          </div>
        </div>
      </div>
    </>
  )
}
export default Jobs;