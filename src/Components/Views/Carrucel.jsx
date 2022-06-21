import React from 'react'

const Carrucel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./imagenes/car1.jpg" className="d-block w-100" alt="..." height="595" />
          </div>
          <div className="carousel-item">
            <img src="./imagenes/car2.jpg" className="d-block w-100" alt="..." height="595" />
          </div>
          <div className="carousel-item">
            <img src="./imagenes/car3.jpg" className="d-block w-100" alt="..." height="595" />
          </div>
          <div className="carousel-item">
            <img src="./imagenes/car4.jpg" className="d-block w-100" alt="..." height="595" />
          </div>
          <div className="carousel-item">
            <img src="./imagenes/car5.jpg" className="d-block w-100" alt="..." height="595" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carrucel