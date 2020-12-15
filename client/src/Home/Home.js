import React, { Component } from 'react'  
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
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
                        <div className="col-8">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="../../public/assets/img/presents.jpg"
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
                                        src="../../public/assets/img/presents.jpg"
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
                                        src="../../public/assets/img/presents.jpg"
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
                <div className="circleImg row-fluid d-flex justify-content-around">
                    <img className="rounded-circle" alt="100x100" src="../../public/assets/img/presents.jpg"
                        />
                    <img className="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                        />
                    <img className="rounded-circle z-depth-2" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                         />
                    </div>
            </div>
        )
    };
}

export default Home
