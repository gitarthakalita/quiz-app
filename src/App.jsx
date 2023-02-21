import React from 'react'
import LandingPage from './pages/landingPage'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import QuizPage from './pages/quizPage';
import OldQuizPage from './pages/quizPage/old_index';
import ScorePage from './pages/scorePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/quiz",
    element: <QuizPage/>
  },
  {
    path: "/quiz_old",
    element: <OldQuizPage/>
  },
  {
    path: "/score",
    element: <ScorePage/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App;