import React from 'react'
import LandingPage from './pages/landingPage'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import QuizPage from './pages/quizPage/index'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/quiz",
    element: <QuizPage/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App;