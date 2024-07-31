
import DashMainScreen from './DashMainScreen'
import Sidebar from './Sidebar'
import '../styles/dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard flex gap-2'>
        <Sidebar className = "sidebar"/>
        <DashMainScreen className="mainscreen"/>
    </div>
  )
}

export default Dashboard