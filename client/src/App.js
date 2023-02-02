import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import PostView from './components/PostView'
import CreatePost from './components/CreatePost'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LandingPage/>}></Route>
        <Route path="/postview" element = {<PostView/>}></Route>
        <Route path="/createPost" element = {<CreatePost/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App