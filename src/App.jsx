import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Activities from './components/Activities/Activities'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {

  const [readingTime, setReadingTime] = useState(0);

  const handleTimeSpend = (time) => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='row'>
        <div className='col col-sm-8'>
          <Blogs
            handleTimeSpend={handleTimeSpend}
          ></Blogs>
        </div>
        <div className='col col-sm-4'>
          <Activities
            readingTime={readingTime}
          ></Activities>
        </div>
      </div>
    </>
  )
}

export default App
