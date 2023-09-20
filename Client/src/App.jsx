import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/Home'))
const PageLayout = lazy(() => import("./components/global/Layout"))
const SongListingPage = lazy(() => import("./pages/SongListing"))
const SongDetailsPage = lazy(() => import("./pages/SongDetails"))
const ArtistAlbumPage = lazy(() => import("./pages/ArtistAlbum"))
const AuthorDetailsPage = lazy(() => import("./pages/AuthorDetails"))
function App() {
  const token = localStorage.getItem('token')
  if (!token)
    return <Navigate to='/login' />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense><PageLayout /></Suspense>}>
          <Route path='/' element={<Suspense><HomePage /></Suspense>} />
          <Route path='/song-listing' element={<Suspense><SongListingPage /></Suspense>} />
          <Route path='/song-details' element={<Suspense><SongDetailsPage /></Suspense>} />
          <Route path='/artist-album' element={<Suspense><ArtistAlbumPage /></Suspense>} />
          <Route path='/author-details' element={<Suspense><AuthorDetailsPage /></Suspense>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
