import React, { useRef} from 'react'
import './index.css'
import music from './music/sound1.mp3'
const App = () => {
  const audioRef = useRef(0)
  function play(){
    // new Audio(sound).play()
    audioRef.current.play()
  
  }
  function pause() {
    // play().pause();
    audioRef.current.pause();
  }
  return (
    <div>
      <div className="container">
      <button className='btn' onClick={play}>Play</button>
      <button className='btn' onClick={pause}>Pause</button>
      </div>
      <div className="audio">
      <audio ref={audioRef} controls>  
      {/* <source src="./music/sound2.mp3"  /> */}
      <source src={music} />
      </audio>
      </div>
    </div>
  )
}

export default App



// import React from 'react'
// import MusicPlayer from './components/Controls'

// const App = () => {
//   return (
//     <div>
//       <MusicPlayer></MusicPlayer>
//     </div>
//   )
// }

// export default App
