import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Card, Form} from "react-bootstrap";

export const BrandBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <Form className='d-flex flex-wrap'>
            {device.brands.map(brand => (
                <Card key={brand.id}
                      className='p-3'
                      border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                      onClick={() => device.setSelectedBrand(brand)}
                      style={{cursor: 'pointer'}}
                >
                    {brand.name}
                </Card>
            ))}
        </Form>
    )
})

