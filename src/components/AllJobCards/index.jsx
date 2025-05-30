import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import JobsCard from '../JobsCard'
import './index.css'
import {Triangle} from 'react-loader-spinner'
import './index.css'

const AllJobCards = () => {
  const [jobsList, setJobsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchJobs = async () => {
      const jwtToken = Cookies.get('jwt_token')
      if (!jwtToken) {
        navigate('/login', {replace: true})
        return
      }

      const response = await fetch('https://apis.ccbp.in/jobs', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setJobsList(data.jobs)
      } else {
        navigate('/login', {replace: true})
      }
      setIsLoading(false)
    }

    fetchJobs()
  }, [navigate])

  return (
    <ul className="all-jobs-container">
      {isLoading ? (
        <Triangle type="ThreeDots" color="#000" height={50} width={50} />
      ) : (
        jobsList.map(job => <JobsCard key={job.id} job={job} />)
      )}
    </ul>
  )
}
export default AllJobCards
