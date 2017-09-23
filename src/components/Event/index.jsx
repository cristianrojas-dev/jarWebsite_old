// Dependecies
import React, { Component } from 'react'

import styles from './event.css'

class Event extends Component {
  render () {
    return (
      <div>
        <p className={styles.date}>
          <span className={styles.month}> Marzo</span>
          <span className={styles.day}> 20</span>
        </p>
        <div className={styles.details}>
          <h5>Titulo</h5>
          <p className={styles.time}>
            <i className="fa fa-clock-o"> 10:00 Am - 18:00 Pm</i>
          </p>
          <p className={styles.time}>
            <i className="fa fa-map-marker"> Liceo Jorge Alessandri R.</i>
          </p>
        </div>
      </div>

    )
  }
}

export default Event

//  <p className={`${styles.date} ${styles.date2}`}>  2 clases anidadas
