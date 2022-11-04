import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Components/Navbar/Navbar"
import BestPractice from "../Pages/Blogs/BestPractice"
import BlogDetail from "../Pages/Blogs/BlogDetail"
import BlogPage from "../Pages/Blogs/BlogPage"
import Productivity from "../Pages/Blogs/Productivity"
import RemoteWork from "../Pages/Blogs/RemoteWork"
import Resource from "../Pages/Blogs/Resource"
import HomePage from "../Pages/Home/HomePage"
import Integration from "../Pages/Integrations/Integration"
import SignupPage from "../Pages/LoginSignup/Signup/SignupPage"
import CreateNewAcc from "../Pages/LoginSignup/CreateNewAcc/CreateNewAcc"
import Login from "../Pages/LoginSignup/Login/Login"
import CreateNewOrg from "../Pages/LoginSignup/CreateNewOrg/CreateNewOrg"
import Project from "../Pages/Projects/Project"
import { PrivateRoute } from "./PrivateRoute"
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hours" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/reports" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/manage" element={<PrivateRoute><Project /></PrivateRoute>} />


            <Route path="/blog" element={<BlogPage />} />
            <Route path="/productivity" element={<Productivity />} />
            <Route path="/remotework" element={<RemoteWork />} />
            <Route path="/practice" element={<BestPractice />} />
            <Route path="/resources" element={<Resource />} />
            <Route path="/blog/blog-details" element={<BlogDetail />} />
            <Route path="/integrations" element={<Integration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/create-new-acc" element={<CreateNewAcc />}></Route>
            <Route path="/create-new-org" element={<CreateNewOrg />}></Route>
            <Route path="/project/list" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/project" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/project/notes" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/project/report" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/project/boards" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/project/timeline" element={<PrivateRoute><Project /></PrivateRoute>} />
            <Route path="/project/files" element={<PrivateRoute><Project /></PrivateRoute>} />


        </Routes>

    )
}
