import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Production from './components/Production'
import GenreMovieList from './components/GenreMovieList'

function App() {

  return (
    <div className=''>
     <Header/>
     <Slider/>
     <Production/>
     <GenreMovieList/>
    </div>
   
  )
}

export default App
