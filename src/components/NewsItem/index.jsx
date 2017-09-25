import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import styles from './news-item.css'

class NewsItem extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (     
        <div className="col-xs-12 col-sm-6 col-lg-4">
          <div className="card">
          <img className="card-img-top" width="100%" src={this.props.image} />
            <div className="card-block">
              <Link to="#">
                <h4 className={`${styles.title} ${"card-title"}`}>{this.props.title}</h4>
              </Link>
              <h6 className="card-title">{this.props.subtitle}</h6>              
              <p dangerouslySetInnerHTML={{__html: this.props.text}} />
            </div>
          </div>
        </div>       
    )
  }
}

export default NewsItem
