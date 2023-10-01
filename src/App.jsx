import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Activities from './components/Activities/Activities'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

const notify = () => {
  toast.warn('You Have Already Bookmarked This Blog!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

function App() {


  const [readingTime, setReadingTime] = useState(0);

  const handleTimeSpend = (time) => {
    setReadingTime(readingTime + time);
  }

  const [bookmarks, setBookmarks] = useState([]);
  const [toast, setToast] = useState(false);

  const handleBookmark = (article) => {
    for (const bookmarkArticle of bookmarks) {
      if (article === bookmarkArticle) {
        return notify();
      }
    }
    const newBookmarks = [...bookmarks, article];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='row'>
        <div className='col col-sm-8'>
          <Blogs
            handleTimeSpend={handleTimeSpend}
            handleBookmark={handleBookmark}
          ></Blogs>
        </div>
        <div className='col col-sm-4'>
          <Activities
            readingTime={readingTime}
            totalBookmarks={bookmarks}
          ></Activities>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
