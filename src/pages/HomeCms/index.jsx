import React, { Component } from 'react'
import firebase from 'firebase'

import styles from './home-cms.css'

class HomeCms extends Component {
    constructor(props){
        super(props)

        this.handleAuth = this.handleAuth.bind(this)
    }
    

    handleAuth() {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    }
    render() {
        return(
            <div className={styles.root}>
                <button onClick={this.handleAuth}>Login con aa</button>
            </div>
        )
    }    
}

export default HomeCms