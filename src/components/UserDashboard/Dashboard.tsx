
import DashMainScreen from './DashMainScreen'
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <div className='flex gap-2'>
        <Sidebar/>
        <DashMainScreen/>
    </div>
  )
}

export default Dashboard