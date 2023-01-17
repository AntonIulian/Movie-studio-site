import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Movie from './pages/Movie';




function App({redirect}) {

 const [isFiltered, setIsFiltered] = useState(false)
    const [isDefault, setIsDefault] = useState(true)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    

function homeSearch(event) {
fetchMovies(event)
}


    async function fetchMovies(event) {
      setLoading(false)

  const {data} = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=91625aff&s=${event}`)
  const {Search} = data
  if (Search === undefined) {
    setLoading(true)
    return
  }
  setMovies(Search)
        setIsFiltered(false)
        
        setLoading(true)
        if (event === undefined) {
          
          setIsDefault(false)
        }
        else {
          setIsDefault(true)
        }
}
useEffect(() => {

    fetchMovies()
    
    

}, [])






  return (
    <>

    <Router>

    <div className="App">
      <Routes>
     
        <Route path='/' element={<Home setIsFiltered={setIsFiltered} homeSearch={homeSearch} ></Home>}></Route>
        <Route path='/movies' element={<Movies loading={loading} setLoading={setLoading} redirect={redirect} fetchMovies={fetchMovies} setIsDefault={setIsDefault} setIsFiltered={setIsFiltered} movies={movies} isDefault={isDefault} isFiltered={isFiltered}  ></Movies>}></Route>
        <Route path='/movies/:id' element={<Movie  setMovies={setMovies}  isFiltered={isFiltered} setIsFiltered={setIsFiltered} redirect={redirect} movies={movies}></Movie>}></Route>
        
        




      </Routes>
     




    </div>
    </Router>
    </>
  );
}

export default App;
