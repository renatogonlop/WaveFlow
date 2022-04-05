import Carousel from 'react-bootstrap/Carousel'

function carrossel() {
    return (
        <Carousel>
            <Carousel.Item>  {/*imagen 1*/}
                <img
                    className="d-block w-100"
                    src="img_1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item> {/*imagen 2*/}
                <img
                    className="d-block w-100"
                    src="img_2.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item> {/*imagen 3*/}
                <img
                    className="d-block w-100"
                    src="img_3.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default carrossel