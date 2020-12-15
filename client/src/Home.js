import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import firstSlide from './images/presents.jpg'
import wish from './images/make-a-wish.png'
import list from './images/list.jpg'
import gift from './images/pink-gift.jpeg'
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
                                        style={{ height: "60vh" }}
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
                                        style={{ height: "60vh" }}
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
                                        style={{ height: "60vh" }}
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
                                <img className="card-img-top" src={wish} alt="Card image cap" style={{ height: "30vh", width: "20vw" }} />
                                <h5 className="card-title">Wish It</h5>
                                <p className="card-text">Got a wish? Have all your wishes come true by creating a profile full of all your hearts desires!</p>

                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card-body">
                                <img className="card-img-top" src={list} alt="Card image cap" style={{ height: "30vh", width: "20vw" }} />
                                <h5 className="card-title">List It</h5>
                                <p className="card-text">Make a list of all your wishes and have your friends and family checkout what you'd love most for any occasion.</p>

                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card-body">
                                <img className="card-img-top" src={gift} alt="Card image cap" style={{ height: "30vh", width: "20vw" }} />
                                <h5 className="card-title">Gift It</h5>
                                <p className="card-text">No idea what to get your friends/family? Check out their wish list to gift them everything they've ever wanted!</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    };
}

export default Home;
