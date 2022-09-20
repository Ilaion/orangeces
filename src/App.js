import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import ProfileContainer, {withRouting} from "./Components/Profile/ProfileContainer"
import {compose} from "redux";
import {initThunk} from "./redux/appReducer";
import Preloader from "./Components/Preloader/Preloader";


const Music = React.lazy(() => import("./Components/Music/Music"));

class App extends React.Component {
    componentDidMount() {
        this.props.initThunk()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='App'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='profile'>
                    <React.Suspense fallback={<div>Loading....</div>}>
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.initialize.initialized
    }
}

export default compose(
    withRouting,
    connect(mapStateToProps, {initThunk}))(App);
