
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Playbar from '../components/Playbar'
import "../components/css/MusicPlayer.css"

const MusicPlayer = () => (
  <div className='MusicPlayer'>
    <Topbar />
    <Sidebar />
    <Playbar />
  </div>
)

export default MusicPlayer;