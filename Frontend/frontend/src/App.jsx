import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/history" element={<History />} />


      </Routes>
    </BrowserRouter>)
}


export default App
