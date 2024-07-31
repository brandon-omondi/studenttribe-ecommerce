import Logo from "../Logo"
import SidebarBtn from "./SidebarBtn"
import { supabase } from "../../backend/lib/supabase"
import { useNavigate } from "react-router-dom"
import '../styles/sidebar.css'

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {

  const navigate = useNavigate()

  const development = () => {
    console.log('Under development')
  }

  const signOut = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) alert(error.message);
    navigate('/login')
    
  }

  return (
    <div className={` ${className}text-white bg-[#383838] w-1/6 h-full flex flex-col flex-grow pt-[32px] px-[56px] gap-[11px] font-inter`}>
        <Logo/>
        <div className="pb-[54px]">
        
          <div className="font-semibold pb-[16px]">OVERVIEW</div>
          <SidebarBtn iconUrl="https://i.postimg.cc/mc8t3Zdg/home.png" buttonName="Dashboard" link="" onClick={development}/>
          <SidebarBtn iconUrl="https://i.postimg.cc/qN6LZSfr/direct-inbox.png" buttonName="Notifications" link="" onClick={development}/>
          <SidebarBtn iconUrl="https://i.postimg.cc/DJ0mxVDd/folder-open.png" buttonName="Lessons" link="" onClick={development}/>
          <SidebarBtn iconUrl="https://i.postimg.cc/qg9gx5Gy/task-square.png" buttonName="LoHo Learning" link="https://app.loholearning.co.ke/" onClick={development}/>
          <SidebarBtn iconUrl="https://i.postimg.cc/QBpqj7xn/shopping-basket.png" buttonName="E-commerce" link="/e-commerce" onClick={development}/>
          
          <div className="pb-40">
            <div className="font-semibold pb-[16px] pt-10">SETTINGS</div>
            <SidebarBtn iconUrl="https://i.postimg.cc/Zvynh8JW/setting-2.png" buttonName="Settings" onClick={development} />
            <SidebarBtn iconUrl="https://i.postimg.cc/cKqmqhZn/logout.png" buttonName="Log-out" onClick={signOut} />
          </div> 
        </div> 
    </div>
  )
}

export default Sidebar