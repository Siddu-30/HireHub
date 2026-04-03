
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './layouts/App.jsx'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home.jsx';
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import About from './components/About.jsx'
import Help from './components/Help.jsx'
import { StrictMode } from 'react';
import RecruiterDashboard from './pages/recruiter/RecruiterDashboard.jsx'
import JobseekerDashboard from './pages/job_seeker/JobseekerDashboard.jsx'
import PostJob from './pages/recruiter/Postjob.jsx';
import Myjobs from './pages/recruiter/Myjobs.jsx'
import Applicants from './pages/recruiter/Applicants.jsx'
import Appliedjobs from './pages/job_seeker/Appliedjobs.jsx'
import Browsejobs from './pages/job_seeker/Browsejobs.jsx'
import ProtectedRoute from './ProtectedRoute.jsx';
import RecruiterLayout from './layouts/RecruiterLayout.jsx'
import JobSeekerLayout from './layouts/JobseekerLayout.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='signin' element={<Signin/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='help' element={<Help/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
    <Route
      path="/recruiter"
      element={
        <ProtectedRoute role="recruiter">
          <RecruiterLayout />
        </ProtectedRoute>
      }
    >
      <Route path="dashboard" element={<RecruiterDashboard />} />
      <Route path="post-job" element={<PostJob />} />
      <Route path="jobs" element={<Myjobs />} />
      <Route path="applicants/:id" element={<Applicants />} />
    </Route>
    <Route
      path="/jobseeker"
      element={
        <ProtectedRoute role="job_seeker">
          <JobSeekerLayout />
        </ProtectedRoute>
      }
    >
      <Route path="dashboard" element={<JobseekerDashboard />} />
      <Route path="applied" element={<Appliedjobs />} />
    </Route>
    <Route
      path="/jobs"
      element={
        <ProtectedRoute role="job_seeker">
          <JobSeekerLayout />
        </ProtectedRoute>
      }
    >
    <Route index element={<Browsejobs />} />
    </Route>
  </>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
