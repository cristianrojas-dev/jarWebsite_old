//Dependecies
import React, { Component } from 'react'
import firebase from 'firebase'

//Components
import BigCarousel from '../../components/BigCarousel'
import Event from '../../components/Event'
import LastNewsCarousel from '../../components/LastNewsCarousel'

//assets
import styles from './home.css'

class Home extends Component {
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
	
	render() {
		return (
			<div>
			  <BigCarousel />
			  <div className="container">
				 <section className={`${styles.sectionContent} ${"container"}`}>
					<h5 className={styles.sectionHeading}>Últimas Noticias</h5>
					<LastNewsCarousel />
				 </section>
			  </div>
	  
			  <div className="container">
				 <div className="row">
					<div className="col-md-3">
					  <section className={styles.sectionContent}>
						 <h5 className={styles.sectionHeading}>Redes Sociales</h5>
					  </section>
					</div>
					<div className={"col-md-6"}>
					  <section className={styles.sectionContent}>
						 <h5 className={styles.sectionHeading}>Otro Contenido</h5>
					  </section>
					</div>
					<div className="col-md-3">
					  <section className={styles.sectionContent}>
						 <h5 className={styles.sectionHeading}>Próximos Eventos</h5>
						 <Event />
					  </section>
					</div>
				 </div>
			  </div>
			</div>
		)
	}	 
}

export default Home
