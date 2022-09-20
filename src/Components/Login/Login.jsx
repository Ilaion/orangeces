import React from "react";
import {Field, reduxForm} from "redux-form";
import {Inputarea} from "../common/Textarea";
import {MaxLengthCreator, required} from "../../utils/validators";
import {loginThunk} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import mod from "../common/Textarea.module.css"
import mods from "./Login.module.css"

/*const msxLength20 = MaxLengthCreator(20);*/

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"email"} validate={[required]} component={Inputarea}/>
            </div>
            <div>
                <Field placeholder={"password"} type={"password"} name={"password"} validate={[required]}
                       component={Inputarea}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Inputarea}/>Remember me
            </div>
            {props.error && <div className={mod.summaryError}>
                {props.error}
            </div>
            }
            <div>
                <button className={mods.btn}>
                    Log in
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div className={mods.loginAll}>
            <span className={mods.label}>Login</span>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunk})(Login);