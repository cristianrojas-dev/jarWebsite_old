import React, { Component } from 'react'
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import uuid from 'uuid'
import ReactQuill from 'react-quill'

import FileUpload from '../../components/FileUpload'

import styles from './news-add.css'

class NewsAdd extends Component {
    constructor (props) {
        super(props)

        this.state = {  
            text: '',            
            news: [],
            picture: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
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

    handleSubmit (event, value) { 
          
        event.preventDefault()
        
        const file = this.state.picture
        
        const storageRef = firebase.storage().ref(`/imgNews/${file.name}`)
        const task = storageRef.put(file)
        
        task.on('state_changed', snapshot => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
                uploadValue: progress
            }) 
        }, error => {
            console.log(error.message)
        }, () => {
            let news = {
                id: uuid.v4(),
                title: this.titleInput.value,
                subtitle: this.subtitleInput.value,
                text: this.state.text,
                image: task.snapshot.downloadURL
            }       

            const newsRef = firebase.database().ref().child('news')        
            const newsID = newsRef.push()
            newsID.set(news)

            window.location.reload();
        }) 
    }    
  
    handleChange(value) {
        this.setState({ text: value })
    }

    handleUpload (event) {
        this.setState({picture : event.target.files[0] })
    }

    render () { 
        return (
            <div className={`${styles.root} ${"container"}`}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Titulo: </label>
                        <input className="form-control" name="title" type="text" ref={node => this.titleInput = node} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Subtitulo: </label>
                        <input className="form-control" name="subtitle" type="text" ref={node => this.subtitleInput = node} required/>
                    </div>
                    <div className="form-group">                     
                        <label htmlFor="file" className="custom-file">Seleccione imagen: </label>
                        <FileUpload 
                            onUpload={this.handleUpload} 
                        />                  
                    </div>                                   
                    <div className="form-group">
                        <label htmlFor="text">Noticia: </label>    
                    <ReactQuill 
                    theme="snow"
                        value={this.state.text}
                        onChange={this.handleChange}                     
                    />                                             
                    </div>                    
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Guardar"/>
                    </div>
                </form>                    
            </div>
        )
    }    
}

export default NewsAdd