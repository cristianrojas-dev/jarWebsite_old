import React from 'react'

const BigCarousel = () => {
  return(
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={require(`../../assets/images/01.jpg`)} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={require(`../../assets/images/02.jpg`)} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={require(`../../assets/images/03.jpg`)} alt="Third slide" />
        </div>
      </div>
    </div>
  )
}

export default BigCarousel
