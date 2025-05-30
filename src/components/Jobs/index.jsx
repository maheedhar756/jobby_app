import AllJobCards from "../AllJobCards";
import Header from '../Header'
import './index.css'
import ProfileCard from "../ProfileCard"
const Jobs = () => {
  
  return (
    <>
      <div className="jobs-container">
        <Header />
        <ProfileCard />
        <AllJobCards />
      </div>
    </>
  )
}
export default Jobs;