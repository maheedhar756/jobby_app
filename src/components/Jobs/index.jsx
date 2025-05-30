import AllJobCards from "../AllJobCards";
import Header from '../Header'
import './index.css'
import ProfileCard from "../ProfileCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailedJobView from '../DetailedJobView'

const Jobs = () => {
  return (
    <>
      <div className="jobs-container">
        <Header />
        <div className="jobs-content">
          <div className="row">
            <div className="col-md-3">
              <ProfileCard />
            </div>
            <div className="col-md-9">
              <AllJobCards />
            </div>
          </div>
        </div>
        <DetailedJobView />
      </div>
    </>
  )
}
export default Jobs;