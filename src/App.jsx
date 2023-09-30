import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Activities from './components/Activities/Activities'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='row'>
        <div className='col col-sm-9'>
          <Blogs></Blogs>
        </div>
        <div className='col col-sm-3'>
          <Activities></Activities>
        </div>
      </div>
    </>
  )
}

export default App
