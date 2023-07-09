import './index.css'
import UserInfo from '../UserInfo'
import BlogsList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />
    </div>

    <div>
      <BlogsList />
    </div>
  </div>
)

export default Home
