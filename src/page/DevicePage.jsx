import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import star from '../assest/star.png'

export const DevicePage = () => {

    const device = {
        id: 1,
        name: 'Xiaomi redmi note 10',
        price: 10000,
        rating: 4,
        img: 'https://cdn21vek.by/img/galleries/7543/669/128gb256gb_xiaomi_01_62a1ba95807a7.jpeg'
    }
    const descriptions = [
        {id: 1, title: 'Память', description: '6 гб'},
        {id: 2, title: 'Камера', description: '32 мп'},
        {id: 3, title: 'Процессор', description: 'helio'},
        {id: 4, title: 'Кол-во ядер', description: '6'},
        {id: 5, title: 'Аккумулятор', description: '6000'},
    ]

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={150} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Form className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div style={{
                            background: `url(${star}) no-repeat center center`,
                            width: 240,
                            height: 240,
                            backgroundSize: 'cover',
                            fontSize: 64
                        }}
                             className='d-flex justify-content-center align-items-center'
                        >
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card style={{
                        width: 300,
                        height: 300,
                        fontSize: 300,
                        border: '5px solid lightgray'
                    }}
                          className='d-flex flex-column align-items-center justify-content-around'
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column mt-3'>
                <h1>Характеристики:</h1>
                {descriptions.map((info, i) => (
                    <Row key={info.id}
                         style={{
                             background: i % 2 === 0 ? "lightgrey" : 'transparent',
                             padding: 10
                         }}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    )
}

