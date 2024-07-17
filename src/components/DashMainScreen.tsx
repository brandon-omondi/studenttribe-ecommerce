import Banner from "./Banner"
import NavigateVideos from "./NavigateVideos"
import SearchBar from "./SearchBar"
import Topics from "./Topics"
import VideoSection from "./VideoSection"


function DashMainScreen() {
  return (
    <div className="pt-4 px-2">
        <SearchBar/>
        <Banner/>
        <Topics/>
        <NavigateVideos/>
        <VideoSection/>
    </div>
  )
}

export default DashMainScreen