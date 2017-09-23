//Dependecies
import React from 'react'

//Components
import BigCarousel from '../../components/BigCarousel'
import Event from '../../components/Event'
import LastNewsItem from '../../components/LastNewsItem'

//assets
import styles from './home.css'


const Home = () => {
  return (
    <div>
      <BigCarousel />
      <div className="container">
        <section className={`${styles.sectionContent} ${"container"}`}>
          <h5 className={styles.sectionHeading}>Últimas Noticias</h5>
          <LastNewsItem />
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

export default Home
