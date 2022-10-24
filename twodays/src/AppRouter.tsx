import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Detail from './Detail'
import Login from './Login'
import NotFound from './NotFound'
import Settings from './Settings'

export const routes =
    <BrowserRouter>
        <Routes>
            <Route path='' element={ <Login></Login> }></Route>
            <Route path='/dashboard' element={ <Dashboard></Dashboard> }></Route>
            <Route path='/settings' element={ <Settings></Settings> }></Route>
            <Route path='/detail/:pid/:cid' element={ <Detail></Detail> }></Route>
            <Route path='*' element={ <NotFound></NotFound> }></Route>
        </Routes>
    </BrowserRouter>