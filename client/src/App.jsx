import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="/about" element={<h1>About</h1>} />
    <Route path="/sign-in" element={<h1>SignIn</h1>} />
    <Route path="/sign-up" element={<h1>SignUp</h1>} />
    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    <Route path="/projects" element={<h1>Projects</h1>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App