import React, { Component } from 'react'  
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import firstSlide from './img/presents.jpg'
import wishes from './img/Wishes.jpg'
export class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    {/* <div className="row">
                        <div className="col-sm-12">
                            <h3>Nav Bar</h3>
                        </div>
                    </div> */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <Carousel>

                                <Carousel.Item>
                                    <img className="d-block w-100"
                                        src={firstSlide}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={firstSlide}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={firstSlide}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                <div className="row d-flex justify-content-center" style={{width: "13rem"}}>
                    <img className="card-img-top" src={wishes} alt="Card image cap" />
                        <div className="card-body">
                             <h5 className="card-title">Wish</h5>
                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <a href="#" class="btn btn-primary"> Start Wishing </a>
                        </div>
                        <img className="card-img-top" src={wishes} alt="Card image cap" />
                        <div className="card-body">
                             <h5 className="card-title">List</h5>
                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <a href="#" class="btn btn-primary"> Start Listing </a>
                        </div>
                        <img className="card-img-top" src={wishes} alt="Card image cap" />
                        <div className="card-body">
                             <h5 className="card-title">Gift</h5>
                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <a href="#" class="btn btn-primary"> Start Gifting </a>
                        </div>
                </div>
                </div>


{/*                 <div className="circleImg row-fluid d-flex justify-content-center">
                    <img className="rounded-circle" alt="100x100" src={wishes}
                        />
                    <img className="rounded-circle" alt="100x100" src={wishes}
                        />
                    <img className="rounded-circle z-depth-2" alt="100x100" src={wishes}
                         />
                </div> */}
            </div>
        )
    };
}

export default Home;
