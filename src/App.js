import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = lazy(() => import('./screens/Home'))
const Login = lazy(() => import('./screens/Login'))

function App() {
  return (
    <Suspense fallback={<></>}>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Router>
    </Suspense>
  )
}

export default App
