import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./Home/Home"
import Login from "./Login/Login"
import Tasks from "./Tasks/Tasks"
import {useSelector} from "react-redux";
const Router = () => {

    const users = useSelector(state => state.users)

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/'></Route>
                <Route element={<Login />} path='/login'></Route>
                {users.length && <Route element={<Tasks />} path='/tasks'></Route>}

                <Route element={<Navigate to={'/login'} />} path='*'></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router