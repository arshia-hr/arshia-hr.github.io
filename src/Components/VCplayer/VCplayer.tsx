import ReactPlayer from 'react-player'
import react from '../../assets/how-to-use-svgs-react.avif'
function VCplayer() {
    
  return (
    <div>
        <ReactPlayer  style={{margin: 'auto'}} url={react}  width={450} controls pip  volume={1}  /> 
    </div>
  )
}

export default VCplayer