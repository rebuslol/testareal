import React from 'react'
import { Carousel } from 'react-bootstrap'
import pic from '../pic.jpg'
import pic2 from '../pic2.jpg'
import pic3 from '../pic3.jpg'


const Slider = () => {
     return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={pic}
                />
                <Carousel.Caption>
                    <h1 bg='dark'>
                        Плати легко
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src= {pic2}
                />
                <Carousel.Caption>
                    <h1>
                        Плати удобно
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={pic3}
                />
                <Carousel.Caption>
                    <h1>
                        Плати безопастно
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider