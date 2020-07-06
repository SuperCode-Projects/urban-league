import React, { Component, createContext } from 'react';
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({ user })
            console.log("Signed in from User Provider", user)
        });
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;