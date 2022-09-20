import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { getUserStatus, profileThunk, updateUserStatus} from "../../redux/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

export const withRouting =  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.profileThunk(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profileData={this.props.profileData} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus} profileId={this.props.router.params.userId}
                         me={this.props.authUserId} myName={this.props.myName}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profileData: state.profile.profileData,
    status: state.profile.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    myName: state.auth.login,
})


export default compose(
    connect (mapStateToProps, {profileThunk, getUserStatus, updateUserStatus}),
    withAuthRedirect,
    withRouting
)(ProfileContainer);

/*
let withRedirect = withAuthRedirect(withRouter(ProfileContainer))

export default connect (mapStateToProps, {profileThunk}) (withRedirect);*/
