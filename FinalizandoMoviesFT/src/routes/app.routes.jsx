import { Routes, Route } from 'react-router-dom';

import { CreateNew } from "../pages/CreateNew"
import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new' element={<CreateNew/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>
    )
}