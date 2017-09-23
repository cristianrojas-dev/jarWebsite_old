import React, { Component } from 'react'
import firebase from 'firebase'

import NewsList from '../../components/NewsList'

import styles from './news.css'

class News extends Component {
    constructor(props){
        super(props)

        this.state = {
            news:[]
        }
    }

    componentWillMount() {
        const newsRef = firebase.database().ref().child('news')
        
        newsRef.on('child_added', snapshot => {
            this.setState({
                news : this.state.news.concat(
                    snapshot.val()
                )
            })
        })
    }

    render(){
        return(
            <div className={`${styles.root} ${"container"}`}>           
                <NewsList 
                    news={this.state.news}                                     
                />
            </div>            
        )
    }
}

export default News
