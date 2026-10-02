import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { useState } from 'react';
import './index.css'
import App from './App.jsx'

import StarRating from './StarRating'

// export default function Test() {
//   const [movieRating, setMovieRating] = useState(0)
//   return (
//     <div>
//       <StarRating 
//       size={40} 
//       color='purple' 
//       onSetRating={setMovieRating}/>
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   )
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StarRating 
    maxRating={5} 
    messages={['Terrible','bad', 'ok', 'good','amazing']}/>
    <StarRating size={24} color="red" className="test" defaultRating={3}/>
    
    <Test/> */}
  </StrictMode>,
)
