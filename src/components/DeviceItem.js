import {Card, Col, Image} from "react-bootstrap";
import star from '../assest/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

export const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3}
             className='mt-3'
             onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card
                style={{width: 150, cursor: 'pointer'}}>
                <Image width={150} height={150} src={device.img}/>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='text-black-50 '>{device.name.split(' ')[0]}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

