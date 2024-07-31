import Banner from "../Banner"
import NavigateVideos from "./NavigateVideos"
import SearchBar from "./SearchBar"
import Topics from "./Topics"
import VideoSection from "./VideoSection"
import "../styles/dashMainScreen.css"

interface DashMainScreenProps {
  className?: string;
}

const DashMainScreen: React.FC<DashMainScreenProps> = ({ className }) => {
  return (
    <div className={`${className} pt-4 px-2`}>
        <SearchBar/>
        <Banner/>
        <Topics/>
        <NavigateVideos/>
        <VideoSection/>
    </div>
  )
}

export default DashMainScreen