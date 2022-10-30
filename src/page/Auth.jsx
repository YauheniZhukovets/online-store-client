import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

export const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}}
                  className='p-5'
            >
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-3'
                                  placeholder='Введите ваш email...'
                    />
                    <Form.Control className='mt-3'
                                  placeholder='Введите ваш password...'
                    />

                    <div
                        className='d-flex justify-content-between align-items-center mt-3 pl-3 pr-3'>
                        {isLogin ?
                            <div>Нет аккаунта?
                                <NavLink
                                    to={REGISTRATION_ROUTE}> Зарегистрируйся!
                                </NavLink>
                            </div>
                            :
                            <div>Есть аккаунта?
                                <NavLink
                                    to={LOGIN_ROUTE}> Войдите!
                                </NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

