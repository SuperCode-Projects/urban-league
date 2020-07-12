import React, { Component, createContext } from 'react';
import { auth, firestore } from "../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (!user) {
                this.setState({ user: null });
            } else {
                firestore.collection("users").doc(user.uid).onSnapshot(doc => {
                    if (doc.exists) {
                        this.setState({ user: doc.data() })
                    }
                })
                console.log("Signed in from User Provider", user)
            }
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