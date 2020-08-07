import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./screens/Home'))
const Login = lazy(() => import('./screens/Login'))

function App() {
  return (
    <Suspense fallback={<></>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default App
