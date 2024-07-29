import Logo from "../Logo"
import SidebarBtn from "./SidebarBtn"


function Sidebar() {
  return (
    <div className="text-white bg-[#383838] w-1/6 h-full flex flex-col flex-grow pt-[32px] px-[56px] gap-[11px] font-inter">
        <Logo/>
        <div className="pb-[54px]">
        
          <div className="font-semibold pb-[16px]">OVERVIEW</div>
          <SidebarBtn iconUrl="https://i.postimg.cc/mc8t3Zdg/home.png" buttonName="Dashboard" link=""/>
          <SidebarBtn iconUrl="https://i.postimg.cc/qN6LZSfr/direct-inbox.png" buttonName="Notifications" link=""/>
          <SidebarBtn iconUrl="https://i.postimg.cc/DJ0mxVDd/folder-open.png" buttonName="Lessons" link=""/>
          <SidebarBtn iconUrl="https://i.postimg.cc/qg9gx5Gy/task-square.png" buttonName="LoHo Learning" link="https://app.loholearning.co.ke/"/>
          <SidebarBtn iconUrl="https://i.postimg.cc/QBpqj7xn/shopping-basket.png" buttonName="E-commerce" link="/e-commerce"/>
          
          <div className="pb-40">
            <div className="font-semibold pb-[16px] pt-10">SETTINGS</div>
            <SidebarBtn iconUrl="https://i.postimg.cc/Zvynh8JW/setting-2.png" buttonName="Settings" />
            <SidebarBtn iconUrl="https://i.postimg.cc/cKqmqhZn/logout.png" buttonName="Log-out" />
          </div> 
        </div> 
    </div>
  )
}

export default Sidebar