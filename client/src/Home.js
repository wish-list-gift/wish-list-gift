import React, { Component } from 'react'  
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import firstSlide from './images/presents.jpg'
import wishes from './images/Wishes.jpg'
export class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='container-xl'>
                    <div className="img1 row" >
                        <div className="col-12">
                            <Carousel >
                                <Carousel.Item>
                                    <img className="d-block w-100"
                                        src={firstSlide}
                                        alt="First slide"
                                        style={{height: "60vh"}}
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
                                        style={{height: "60vh"}}
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
                                        style={{height: "60vh"}}
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>

                        <div className="row">
                                <div className="col-12 col-sm-4">
                                    <div className=" card-body">
                                        <img className="card-img-top" src={wishes} alt="Card image cap" />
                                        <h5 className="card-title">Wish</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary"> Start Wishing </a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="card-body">
                                        <img className="card-img-top" src={wishes} alt="Card image cap" />
                                            <h5 className="card-title">List</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary"> Start Listing </a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="card-body">
                                        <img className="card-img-top" src={wishes} alt="Card image cap" />
                                            <h5 className="card-title">Gift</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary"> Start Gifting </a>
                                    </div>
                                </div>
                                
                        </div>
                 </div>
            </div>

        )
    };
}

export default Home;
